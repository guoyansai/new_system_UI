<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">
                    <cpSelectTable 
                       @selected-partition="onSelectedPartition"
                    />
                </div>
                <div class="col-sm-9">
                 <cpDIContent 
                  
                   />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cpSelectTable from "./CP_SelectTable.vue";
import cpPointsTable from "./CP_PointsList.vue";
import cpTabNav from "./CP_TabNav.vue";
import cpDIContent from "./CP_DI-Content.vue";
import cpAIContent from "./CP_AI-Content.vue";
import cpDPSContent from "./CP_DPSContent.vue";

export default {
    name: "cp",

    components: {
        cpSelectTable,
        cpPointsTable,
        cpTabNav,
        cpDIContent,
        cpAIContent,
        cpDPSContent,
    },
    data() {
        return {
            cpDIContent: "cpDIContent",
            cpAIContent: "cpAIContent",
            cpDPSContent: "cpDPSContent",
            default_tab: "",
           
        };
    },

    mounted() {
        uibuilder.start();
        uibuilder.onChange("msg", (newMsg) => {
            console.info("Msg received from Node-RED server in Home:", newMsg);
        });
    },

    methods: {
        tabChange(tab) {
            this.default_tab = tab; 
            this.$bus.$emit("currentTab",this.default_tab)
        },
        onSelectedPartition(value){
            console.log("onSelectedPartition",value);
        },
    },
};
</script>

<style scoped>
.nav-link {
    cursor: pointer;
}
.BgColor {
    color:white;
    font-weight: bolder;
    background-color: rgb(136, 136, 136);
}
</style>