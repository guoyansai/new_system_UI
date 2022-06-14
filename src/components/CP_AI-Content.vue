<template>
    <div v-if="isSelected">

        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#CP_PointsList"
        >
            + Add
        </button>
       












        </div>
</template>

<script>
import $ from "jquery";
var socket = io("http://localhost:3030");
export default {
    name: "cpDIContent",

    props: {
        isSelected: {
            type: Boolean,
        },
    },

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