<template>
    <div >

        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#CP_PointsList"
        >
            DPS CONTENT
        </button>
       












        </div>
</template>

<script>
import $ from "jquery";

export default {
    name: "cpDIContent",

   
    data() {
        return {
        
        };
    },

    created() {
       
        //CP_SelectTable
        this.$bus.$on("selected", (data) => {
            //console.log("DI Tag",data);
            this.selectedTab = data;
        });

    },

    mounted() {
        uibuilder.start();
        uibuilder.onChange("msg", (msg) => {
            console.info("Msg received from Node-RED server in Home:", msg);
        });
      
    },

    methods: {
    }
};
</script>

<style scoped>
tbody tr {
    cursor: pointer;
}
.active {
    cursor: pointer;
    color: red;
    background-color: rgb(167, 164, 164);
}
.radio_second {
    margin-left: 10%;
}
</style>