import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import About from './views/About.vue';
// import Blog from './views/Blog.vue';
// import Booking from './views/Booking.vue';
// import BlogGallery from './components/BlogGallery.vue';
// import BlogPostDetail from './components/BlogPostDetail.vue';
import firebase from 'firebase/app';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/book_us',
      name: 'Book Us',
      component: () => import(/* webpackChunkName: "booking" */ './views/Booking.vue'),
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
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "admin-login" */ './components/AdminLogin.vue'),
    },
    {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue'),
      children: [
        {
          path: '',
          redirect: 'shows',
        },
        {
          path: 'shows',
          component: () => import(/* webpackChunkName: "admin-shows" */ './components/AdminShowsPage.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'bookings',
          component: () => import(/* webpackChunkName: "admin-bookings" */ './components/AdminBookings.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'settings',
          component: () => import(/* webpackChunkName: "admin-settings" */ './components/AdminSettings.vue'),
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.afterEach((to, from) => {
  window.scroll(0, 0);
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next({path: '/login'});
  } else {
    next();
  }
});

export default router;
