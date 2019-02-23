import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/book_us',
      name: 'Book Us',
      component: () => import(/* webpackChunkName: "about" */ './views/Booking.vue'),
    },
    {
      path: '/fanaticks',
      name: 'FaNaticks',
      component: () => import(/* webpackChunkName: "fanaticks" */ './views/Fanaticks.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
      children: [
        {
          path: '',
          component: () => import(/* webpackChunkName: "blog-gallery" */ './components/BlogGallery.vue'),
        },
        {
          path: 'post/:id',
          component: () => import(/* webpackChunkName: "blog-view" */ './components/BlogPostDetail.vue'),
        },

      ],
    },
  ],
});
