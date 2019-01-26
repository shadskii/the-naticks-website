<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
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
    </v-card>
  </v-hover>
</template>
<script>
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
      this.$router.push({path: `/blog/post/${this.id}`});
    },
  },
};
</script>
