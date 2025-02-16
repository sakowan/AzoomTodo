<template>
  <div class="list-container">
    <!-- Add item -->
    <div class="item-default bottom-pink">
      <input
        type="text"
        placeholder="タスクを追加する" 
        class="ipt-text-styles"
        v-model="newTodoText"
        @keydown.enter.prevent="addNewTodo"
      />
      <div class="w-1/5 flex justify-end">
        <CirclePlus 
          class="icon-def icon-md filled-icon"
          @click="addNewTodo"
        />
      </div>
    </div>

    <!-- List ongoing items -->
    <transition-group name="fade" tag="div" class="w-full">
      <div 
        v-for="todo in todoStore.ongoingTodos" 
        :key="todo.id" 
        class="item-default item-added"
      >
        <div class="w-1/5">
          <input 
            type="checkbox" 
            class="checkbox"
            :checked="todo.completed"
            @change="handleCheckboxChange(todo)"
          />
        </div>
        <div class="w-4/5 flex justify-between">
          <p>{{ todo.text }}</p>
          <Trash2 
            class="icon-def icon-sm"
            @click="todoStore.removeTodo(todo.id)"
          />
        </div>
      </div>
    </transition-group>

    <!-- List completed items -->
    <transition-group name="fade" tag="div" class="bg-gray-50">
      <div 
        v-for="todo in todoStore.completedTodos" 
        :key="todo.id" 
        class="item-default item-complete"
      >
        <div class="w-4/5">{{ todo.text }}</div>
        <div class="w-1/5 flex justify-end gap-x-2">
          <Undo2 
            class="icon-def icon-sm"
            @click="todoStore.toggleTodo(todo.id)"
          />
          <Trash2 
            class="icon-def icon-sm"
            @click="todoStore.removeTodo(todo.id)"
          />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useTodoStore } from '~/stores/todolist';
  import { CirclePlus, Undo2, Trash2 } from 'lucide-vue-next';

  definePageMeta({
    layout: 'default'
  });

  // Reference to input text
  const newTodoText = ref('');

  // Load pinia store
  const todoStore = useTodoStore();

  // Add new todo
  const addNewTodo = () => {
    if (newTodoText.value.trim()) {
      todoStore.addTodo(newTodoText.value);
      newTodoText.value = ''; // Clear input after submit
    }
  };

  // Delay effect
  const handleCheckboxChange = (todo) => {
    todo.completed = !todo.completed;
    setTimeout(() => {
      todoStore.toggleTodo(todo.id);
    }, 50);
  };
</script>

<style scoped>
  .list-container {
    @apply w-1/2 h-4/5 bg-white rounded-2xl border border-mypink-50 flex flex-col overflow-y-auto;
  }
  
  .item-added {
    @apply bottom-pink text-gray-600;
  }

  .item-default {
    @apply w-full h-20 px-10 flex items-center flex-shrink-0;
  }

  .item-complete {
    @apply text-gray-400 line-through italic bottom-gray;
  }

  .checkbox {
    @apply h-6 w-6 border border-mypink-300;
  }

  .ipt-text-styles {
    @apply placeholder:font-thin placeholder:text-lg w-4/5 focus:outline-none focus:border-b focus:border-gray-300;
  }

  .bottom-pink {
    @apply border-b border-mypink-50;
  }

  .bottom-gray {
    @apply border-b border-gray-300;
  }

  .icon-def {
    @apply stroke-[1px] text-mypink-500 cursor-pointer;
  }

  .icon-md {
    @apply w-9 h-9;
  }

  .icon-sm {
    @apply w-6 h-6;
  }

  .filled-icon {
    fill: theme('colors.mypink.500');
    stroke: white;
  }

  /* Transition effect */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s, transform 0.25s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>