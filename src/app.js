import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import 'bootstrap'
import "jquery"

import { fabric } from "fabric";
Vue.use(fabric);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)



// uibuilder.start()
window.uibuilder = uibuilder;
uibuilder.start('/navbar', '/uibuilder/vendor/socket.io')

// Enable Devtools
Vue.config.devtools = true

// export const bus = new Vue();
Vue.prototype.$bus = new Vue();
new Vue({
    el: "#app",
    // runtimerCompiler: true,
    router,
    render: (h) => h(App),
});