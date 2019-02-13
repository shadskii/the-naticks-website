<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      row
      wrap
      justify-space-around
      text-xs-center
    >
      <v-flex
        xs12
        sm10
        md10
      >
        <admin-shows-list />
      </v-flex>
    </v-layout>
    <admin-shows-add v-model="dialog"/>
    <v-btn
      :class="{'btn-padding-with-nav': navShowing}"
      color="primary"
      fixed
      fab
      right
      bottom
      @click="dialog = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>
<script>
import AdminShowsList from '@/components/AdminShowsList.vue';
import AdminShowsAdd from '@/components/AdminShowsAdd.vue';
export default {
  components: {
    AdminShowsList,
    AdminShowsAdd,
  },
  data() {
    return {
      authenticated: false,
      dialog: false,
    };
  },
  computed: {
    navShowing() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
<style scoped>
.btn-padding-with-nav{
    margin-bottom: 70px;
}
</style>
