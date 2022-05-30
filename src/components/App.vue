<template lang="html">
  <div>
    <navbar></navbar>
    <!-- <keep-alive :max="13"> -->
    <router-view :key="$route.fullPath" v-if="isRouterAlive"/> 
    <!-- </keep-alive> -->

    


  </div>
</template>

<script>
// import Vue from "vue";
import navbar from "./NavBar.vue";

export default {
    name: "app",
    provide() {
        return {
            reload: this.reload,
        };
    },

    components: {
        navbar,
    },
    data() {
        return {
            isRouterAlive: true,
        };
    },
 
    mounted() {
        // uibuilder.debug(true);
        // uibuilder.start("/navbar", "/uibuilder/vendor/socket.io");
        uibuilder.start();
        uibuilder.onChange("msg", (msg) => {
            console.info("Msg received from Node-RED server in Home:", msg);
        });
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(function () {
                this.isRouterAlive = true;
            });
        },
    },
};
</script>


<style>
h2 {
    font-weight: bold !important;
}
</style>
