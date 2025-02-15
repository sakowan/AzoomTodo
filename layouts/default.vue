<template>
  <div class="h-screen">
    <nav class="relative flex items-center h-20 px-20 w-full">
      <!-- Left-aligned links -->
      <ul class="flex justify-start w-1/2 text-mypink-500";>
        <li>
          <NuxtLink to="/">
            <div class="flex flex-col items-center">
              <p class="text-2xl">ホーム</p>
              <p class="text-xs">HOME</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <!-- Centered logo -->
      <img class="absolute left-1/2 -translate-x-1/2 h-12" src="../azoomtodologo.png" alt="ロゴ">
    </nav>


    <!-- Components that will appear within the overall default layout go here-->
     <div class="bg-gray-50 px-10 h-full flex items-center justify-center">
      <slot/>
     </div>
  </div>
</template>