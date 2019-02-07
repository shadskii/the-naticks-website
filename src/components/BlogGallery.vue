<template>
  <v-progress-linear
    v-if="noPosts"
    color="white"
    height="4"
    class="push-progress"
    indeterminate />
  <v-container
    v-else
    fluid
    grid-list-lg>
    <v-layout
      row
      wrap
      justify-left
      text-xs-center>
      <v-flex
        v-for="p in posts"
        :key="p.title"
        class="pb-3"
        xs12
        sm6
        lg4>
        <blog-post :post="p"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import BlogPost from './BlogPost.vue';
import axios from 'axios';
import {mapMutations} from 'vuex';

const blogApi = 'https://public-api.wordpress.com/rest/v1/sites/thenaticksblog.wordpress.com/posts';
export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    noPosts() {
      return this.posts.length === 0;
    },
  },
  mounted() {
    this.setSubtitle('');
    axios
        .get(blogApi).then((res) => {
          this.posts = res.data.posts;
        });
  },
  methods: {
    ...mapMutations([
      'setSubtitle',
    ]),
  },
};
</script>
<style scoped>
.push-progress{
  transform:translateY(-15px);
}
</style>
