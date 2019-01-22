<template>
  <v-card >
    <v-card-title v-html="title" />
    <v-img :src="featureImage" />
  </v-card>
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
    };
  },
};
</script>
