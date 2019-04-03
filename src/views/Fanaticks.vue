<template>
  <div>
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
          <h1 class="headline">Sign up for our mailing list below.</h1>
          <fan-spotlight class="py-5"/>
          <fanaticks-form class="py-5"/>
          <tile-photo-gallery class="py-5"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import FanaticksForm from '@/components/FanaticksForm.vue';
import FanSpotlight from '@/components/FanSpotlight.vue';
import TilePhotoGallery from '@/components/TilePhotoGallery.vue';
export default {
  components: {
    FanaticksForm,
    TilePhotoGallery,
    FanSpotlight,
  },
};
</script>
