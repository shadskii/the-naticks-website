<template>
  <v-card>
    <v-img
      v-if="$vuetify.breakpoint.xsOnly"
      :src="pic"
    />
    <v-card-text>
      <v-layout
        :reverse="right"

        row
        wrap>
        <v-flex
          text-xs-center
          lg2
          md3
          sm4
          xs12>
          <v-img
            v-if="$vuetify.breakpoint.smAndUp"
            :src="pic"
          />
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

