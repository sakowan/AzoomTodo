<template>
  <div class="w-1/2 h-3/4 bg-white rounded-2xl border border-mypink-50 flex flex-col items-center">

    <!-- list item-->
    <div class="w-full border-b border-mypink-50 h-20 px-10 flex items-center">
      <div class="w-1/5">
        <input type="checkbox" class="h-6 w-6 border border-mypink-300"/>
      </div>
      <div class="w-4/5 text-gray-600">Lorem ipsum dolor sit amet.</div>
    </div>

    <!-- Add item button-->
    <div class="h-20 px-10 w-full flex items-center">
      <input placeholder="タスクを追加する" class=" w-4/5 border-b focus:outline-none focus:border-mypink-500" type="text"/>
      <div class="w-1/5 flex justify-end">
        <CirclePlus class="w-8 h-8 stroke-[1px] text-mypink-500" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout:'default'
  })

  import { CirclePlus } from 'lucide-vue-next';
</script>

<style  scoped>

</style>