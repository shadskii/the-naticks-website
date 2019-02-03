<template>
  <v-toolbar
    :extended="iosPwa"
    :extension-height="iosPwa && iphoneX ? 44 : 20"
    app
    color="primary"
  >

    <v-fab-transition>
      <v-btn
        v-if="backNavigation"
        flat
        icon
        @click="$router.go(-1)"
      >
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-btn>
    </v-fab-transition>
    <div
      v-if="iosPwa"
      slot="extension"
      class="pb-3"
    >
      <span
        class="headline text-uppercase font-weight-light"
      >The </span>
      <span
        class="headline text-uppercase font-weight-bold"
      >Naticks</span>
    </div>
    <v-toolbar-title
      v-else
      class="headline text-uppercase font-weight-medium"
    >
      <span
        class="display-1 text-uppercase font-weight-light"
      >The </span>
      <span
        class="display-1 text-uppercase font-weight-bold"
      >Naticks</span>
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="p in pages"
        :key="`${p.name}-toolbar`"
        :to="p.link"
        flat
      >
        {{ p.name }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import {isIphoneX, isPwa, isIos} from '../phoneDetection';
import {mapState} from 'vuex';
import pages from '../views';
export default {
  name: 'TheToolbar',
  data() {
    return {
      iphoneX: isIphoneX(),
      iosPwa: isPwa() && isIos(),
      pages: pages,
    };
  },
  computed: {
    ...mapState([
      'backNavigation',
    ]),
  },
};
</script>
