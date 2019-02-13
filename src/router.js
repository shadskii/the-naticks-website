import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Blog from './views/Blog.vue';
import Booking from './views/Booking.vue';
import BlogGallery from './components/BlogGallery.vue';
import BlogPostDetail from './components/BlogPostDetail.vue';

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
          component: BlogPostDetail,
        },
      ],
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking,
    },
    {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue'),
      children: [
        {
          path: '',
          component: () => import(/* webpackChunkName: "admin-login" */ './components/AdminLogin.vue'),
        },
        {
          path: 'shows',
          component: () => import(/* webpackChunkName: "admin-shows" */ './components/AdminShowsPage.vue'),
        },
        {
          path: 'settings',
          component: () => import(/* webpackChunkName: "admin-settings" */ './components/AdminSettings.vue'),
        },
      ],
    },
  ],
});
router.afterEach((to, from) => {
  window.scroll(0, 0);
});

export default router;
