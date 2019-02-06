<template>
  <div>
    <v-avatar size="200">
      <v-img
        :src="pic"
      />
    </v-avatar>
    <h1
      class="headline font-weight-bold pt-1"
      v-text="name" />
    <h1
      class="subheading text-xs-left font-weight-light mx-3"
      v-text="bio" />
  </div>
</template>
<script>
export default {
  props: {
    pic: {
      type: String,
      default: '',
    },
    name: {
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

