<template>
  <v-container
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
  mounted() {
    axios
        .get(blogApi).then((res) =>{
          this.posts = res.data.posts;
        });
    this.setBackNavigation(false);
  },
  methods: {
    ...mapMutations([
      'setBackNavigation',
    ]),
  },
};
</script>

