import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    {
      path: '/booking',
      name: 'book',
      component: () => import(/* webpackChunkName: "booking" */ './views/Booking.vue'),
    },
  ],
});
router.afterEach((to, from) => {
  window.scroll(0, 0);
});

export default router;
