import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './components/Home/LandingPage.vue';
import HomePage from './components/Home/HomePage.vue';
import AboutPage from './components/About/AboutPage.vue';
import ExtensionPage from './components/Extension/ExtensionPage.vue';
import NotFound from './NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'Landing', component: LandingPage},
  {path: '/home', name: 'Home', component: HomePage},
  {path: '/about', name: 'About', component: AboutPage},
  {path: '/extension', name: 'Extension', component: ExtensionPage},
  {path: '*', name: 'Not Found', component: NotFound}
];

const router = new VueRouter({routes});

/**
 * Navigation guards to prevent user from accessing wrong pages.
 */
router.beforeEach((to, from, next) => {
  if (router.app.$store) {
    if (to.name === 'Login' && router.app.$store.state.username) {
      next({name: 'Account'}); // Go to Account page if user navigates to Login and are signed in
      return;
    }

    if (to.name === 'Account' && !router.app.$store.state.username) {
      next({name: 'Login'}); // Go to Login page if user navigates to Account and are not signed in
      return;
    }
  }

  next();
});

export default router;
