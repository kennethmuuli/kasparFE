import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});


import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
    const routes = [
        { path: '/', component: Home },
        { path: '/register', component: Register },
    ];
  
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
  const router = createRouter({
// 4. Provide the history implementation to use. We
// are using the hash history for simplicity here.
        history: createWebHashHistory(),
        routes, // short for `routes: routes`
    });

createApp(App).use(vuetify).use(router).mount('#app');

