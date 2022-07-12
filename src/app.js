import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import "bootstrap";



// regenerator-runtime
import "core-js/stable";
import "regenerator-runtime/runtime";
// Fabric.js
import { fabric } from "fabric";
Vue.use(fabric);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

uibuilder.start();
window.uibuilder = uibuilder;
uibuilder.start("/new_system_UI", "/uibuilder/vendor/lib/socket.io");

// Enable Devtools
Vue.config.devtools = true;

// global socket
import socket from "./socket"
Vue.prototype.$socket = socket


// store const bus = new Vue();
Vue.prototype.$bus = new Vue();

new Vue({
    el: "#app",
    runtimerCompiler: true,
    router,
    render: (h) => h(App),
    
});