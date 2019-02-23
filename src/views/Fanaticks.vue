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
          <h1>Without YOU, we would just be the aticks!</h1>
          <br>
          <h2>Sign up for our mailing list or chat with us below!</h2>
          <br>
          <fan-spotlight />
          <br>
          <fanaticks-form />
          <br>
          <tile-photo-gallery />
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
