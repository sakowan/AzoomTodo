import { defineStore } from 'pinia';

// Define a datatype
type Todo = {
  id: number;
  text:string;
  completed: boolean;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    ongoingTodos: [] as Todo[],
    completedTodos: [] as Todo[],
  }),

  actions: {
    
    // Create new todo item
    addTodo(newTodoText: string) {
      const newTodo = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      };
      this.ongoingTodos.push(newTodo);
    },

    // Set completed on/off
    toggleTodo(id: number) {
      const ongoingIndex = this.ongoingTodos.findIndex(todo => todo.id === id);
      const completedIndex = this.completedTodos.findIndex(todo => todo.id === id);

      if (ongoingIndex !== -1) { // Item is in ongoing
        const todo = this.ongoingTodos.splice(ongoingIndex, 1)[0]; // Find in ongoing
        this.ongoingTodos = this.ongoingTodos.filter(todo => todo.id !== id); // Rm from ongoing
        this.completedTodos.push({ ...todo, completed: true }); // Move to completed
      
      } else if (completedIndex !== -1) { // Item is in completed
        const todo = this.completedTodos.splice(completedIndex, 1)[0];
        this.completedTodos = this.completedTodos.filter(todo => todo.id !== id);
        this.ongoingTodos.push({ ...todo, completed: false });
      }
    },

    // Rm todo item
    removeTodo(id: number) {
      this.ongoingTodos = this.ongoingTodos.filter(todo => todo.id !== id);
      this.completedTodos = this.completedTodos.filter(todo => todo.id !== id);
    },
  },
});