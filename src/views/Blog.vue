<template>
  <v-container>
    <v-layout
      row
      wrap
      justify-center
      text-xs-center>
      <v-flex
        v-for="p in posts"
        :key="p.title"
        class="pb-3"
        xs10>
        <v-card >
          <v-card-title v-text="p.title" />
          <v-card-text v-text="p.content" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      posts: Array(10).fill(1).map((v, i)=> ({title: `post: ${i}`, content: `content content`})),
    };
  },
};
</script>

