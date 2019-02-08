import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Blog from './views/Blog.vue';
import Booking from './views/Booking.vue';
import BlogGallery from './components/BlogGallery.vue';

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
      component: About,
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '',
          component: BlogGallery,
        },
        {
          path: 'post/:id',
          component: () => import(/* webpackChunkName: "blog-view" */ './components/BlogPostDetail.vue'),
        },
      ],
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking,
    },
  ],
});
router.afterEach((to, from) => {
  window.scroll(0, 0);
});

export default router;
