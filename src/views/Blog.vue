<template>
  <v-fade-transition>
    <router-view :key="$route.fullPath"/>
  </v-fade-transition>
</template>
<script>
export default {

};
</script>

