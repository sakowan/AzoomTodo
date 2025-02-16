<template>
  <div class="h-screen">
    <nav class="relative flex items-center h-20 px-20 w-full">
      <!-- Links aligned left -->
      <ul class="h-full text-mypink-500";>
        <li class="h-full border-b border-mypink-300 flex items-center">
          <NuxtLink to="/">
            <div class="flex flex-col items-center">
              <p class="text-2xl">ホーム</p>
              <p class="text-xs">HOME</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <!-- Center logo in nav -->
      <img class="absolute left-1/2 -translate-x-1/2 h-12" src="../azoomtodologo.png" alt="ロゴ">
    </nav>


    <!-- Load components into default vue here -->
     <div class="bg-gray-50 px-10 h-full flex items-center justify-center">
      <slot/>
     </div>
  </div>
</template>