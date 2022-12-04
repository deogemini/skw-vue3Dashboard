import Vue, { createApp } from '@vue/compat';
import BootstrapVue from 'bootstrap-vue';
import HelloBootstrap from './components/HelloBootstrap.vue';
import router from "./router/index.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
const app = createApp(HelloBootstrap);
app.use(router);
app.mount('#app');
