<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">
                    <cpSelectTable />
                </div>
                <div class="col-sm-9">
                    <nav>
                        <ul class="nav nav-tabs" >
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    :class="{ BgColor: (cpDIContent === default_tab) }"
                                    @click="tabChange(cpDIContent,$event)"
                                    >Physical Digital Input</a
                                >
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    :class="{ BgColor: (cpAIContent === default_tab) }"
                                    @click="tabChange(cpAIContent,$event)"
                                    >Physical Analog Input</a
                                >
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    :class="{ BgColor: (cpDPSContent === default_tab) }"
                                    @click="tabChange(cpDPSContent,$event)"
                                    >Software Digital Input</a
                                >
                            </li>
                        </ul>
                        <div :is="default_tab"></div>
                        <!-- <slot></slot> -->
                    </nav>
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
            default_tab: "cpDIContent",
           
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
    },
};
</script>

<style scoped>
.nav-link {
    cursor: pointer;
}
.BgColor {
    color:red;
    font-weight: bolder;
}
</style>