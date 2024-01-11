<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: rtl;
  color: var(--text-gray);
  
  
}

body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  background: #c1e9e0;
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(#62d0b6, #06f3bc);
  border: 1px solid#fff;
  border-radius: 8px;
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}
*{
  margin: 0;
  padding: 0;
}

:root {
  --backg:#FAFAFA;
  --text-gray:#757575;
  --primary:#62D0B6;
  --Dark-Color---White: #FFF ;
  --Primary-Color---Primary:#62D0B6;
  --Dark-Color-Gray :#333333;
  --Danger-Color---Danger-Primary:#F55157;
}
</style>
