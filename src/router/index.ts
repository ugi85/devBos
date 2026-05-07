import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CatalogPage from '../pages/CatalogPage.vue';
import CalculatorPage from '../pages/CalculatorPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SupportPage from '../pages/SupportPage.vue';
import OrderTrackingPage from '../pages/OrderTrackingPage.vue';
import ProductDetailPage from '../pages/ProductDetailPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/catalog', component: CatalogPage },
  { path: '/calculator', component: CalculatorPage },
  { path: '/about', component: AboutPage },
  { path: '/login', component: LoginPage },
  { path: '/support', component: SupportPage },
  { path: '/track', component: OrderTrackingPage },
  { path: '/product/:id', component: ProductDetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
