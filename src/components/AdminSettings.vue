<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      row
      wrap
      justify-space-around
      text-xs-center
    >
      <v-flex
        xs12
        sm8
        md6
      >
        <admin-panel />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AdminPanel from '@/components/AdminPanel.vue';

export default {
  components: {
    AdminPanel,
  },
  data() {
    return {
      authenticated: false,
    };
  },
};
</script>
