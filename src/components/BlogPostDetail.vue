<template>
  <v-container fluid>
    <v-layout
      row
      wrap
      justify-center
      text-xs-center
    >
      <v-flex
        v-if="post"
        class="pb-3"
        xs12
        lg7
      >
        <p
          class="display-1 font-weight-bold pb-3"
          v-html="post.title"
        />
        <div v-html="post.content" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios';
const blogApi =
  'https://public-api.wordpress.com/rest/v1/sites/thenaticksblog.wordpress.com/posts';
export default {
  props: {},
  data() {
    return {
      post: undefined,
    };
  },
  mounted() {
    axios.get(`${blogApi}/${this.$route.params.id}`).then((res) => {
      this.post = res.data;
    });
  },
};
</script>
<style>
.size-full {
  height: 100%;
  width: 100%;
}
</style>


