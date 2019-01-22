<template>
  <v-container fluid>
    <v-layout
      row
      wrap
      justify-center
      text-xs-center>
      <v-flex
        v-for="p in posts"
        :key="p.title"
        class="pb-3"
        xs12>
        <blog-post :post="p"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import BlogPost from '../components/BlogPost.vue';
import axios from 'axios';
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
  mounted() {
    axios
        .get(blogApi).then((res) =>{
          this.posts = res.data.posts;
        })
        .catch((error) => console.log(error));
  },
};
</script>

