<template>
  <v-card
    hover
    @click.native="toDetail()">
    <v-card-title
      class="title"
      v-html="title"/>
    <v-img
      :src="featureImage"
      max-height="400px"/>
    <v-card-text
      class="body-2 font-weight-light"
      v-html="excerpt" />
    <v-card-actions>
      <v-spacer/>
      <v-btn
        flat
        color="primary">
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapMutations} from 'vuex';

export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.post.title,
      featureImage: this.post['featured_image'],
      excerpt: this.post.excerpt,
      id: this.post['ID'],
    };
  },
  methods: {
    toDetail() {
      this.setSubtitle(this.title);
      this.$router.push({path: `/blog/post/${this.id}`});
    },
    ...mapMutations([
      'setSubtitle',
    ]),
  },
};
</script>
