<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout
        column
        align-center>
        <v-avatar
          size="25em">
          <img
            :src="logo"
            class="img-circle elevation-7 mb-1">
        </v-avatar>
        <blockquote>
          &#8220;I’d rather be dead than cool.&#8221;
          <footer>
            <small>
              <em>&mdash;Kurt Cobain</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import logo from '../assets/logo.png';
export default {
  name: 'HelloWorld',
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
