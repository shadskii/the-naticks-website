<template>
  <div class="text-xs-center">
    <v-avatar size="200">
      <v-img
        :src="pic"
      />
    </v-avatar>
    <p
      class="subheader font-weight-light"
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

