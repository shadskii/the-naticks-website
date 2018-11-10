<template>
  <v-card>
    <v-card-text>
      <v-layout
        :reverse="right"
        row
        wrap>
        <v-flex
          justify-center
          lg2
          md3
          sm4
          xs12>
          <v-avatar
            size="180">
            <v-img
              :src="pic"
              contain
            />
          </v-avatar>
        </v-flex>
        <v-flex
          lg10
          md9
          sm8
          xs12>
          <p
            class="body-2"
            v-text="bio"/>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    pic: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

