<template>
  <v-app dark>
    <v-toolbar
      :extended="iosPwa"
      :extension-height="iosPwa && iphoneX ? 44 : 20"
      app
      color="primary"
    >
      <div
        v-if="iosPwa"
        slot="extension"
        class="pb-3"
      >
        <span
          class="headline text-uppercase font-weight-medium"
          v-text="title"
        />
      </div>
      <v-toolbar-title
        v-else
        class="headline text-uppercase font-weight-medium"
        v-text="title"
      />
    </v-toolbar>

    <v-content>
      <v-fade-transition
        leave-absolute>
        <router-view />
      </v-fade-transition>
    </v-content>
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.name"
          :to="item.link">
          <v-list-tile-content>
            {{ item.name }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import {isIphoneX, isPwa, isIos} from './phoneDetection';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      drawer: false,
      title: 'The Naticks',
      iphoneX: isIphoneX(),
      iosPwa: isPwa() && isIos(),
      items: [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'Our Story',
          link: '/about',
        },
      ],
      title: 'The Naticks',
    };
  },
};
</script>
