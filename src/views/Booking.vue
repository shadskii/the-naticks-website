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
        <booking-form />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import BookingForm from '@/components/BookingForm.vue';
export default {
  components: {
    BookingForm,
  },
};
</script>
