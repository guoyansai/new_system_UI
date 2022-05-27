<template>
    <div>
        <!-- <h1>Customer Shopes</h1> -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2">
                    <div class="row">
                        <div class="col-sm">
                      <csTable>
                    </div>
                        <!-- <div class="col-sm">
                            <csToolsTable />
                        </div> -->
                    </div>
                </div>

                <div class="col-sm-10">
                    <csTools />
                </div>

                <!-- <div class="col-sm-3">
           
        </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import csTable from "./CS_Table.vue";
import csTools from "./CS_Tools.vue";

import csToolsTable from "./CS_Tools_Table.vue";

export default {
    name: "CS",
    components: {
        csTable,
        csTools,
        csToolsTable,

    },

    data() {
        return {};
    },
    mounted() {
        uibuilder.onChange("msg", (newMsg) => {
            console.info("Msg received from Node-RED server in Page1:", newMsg);
            //this.msg = newMsg
        });
    },
    methods: {},
};
</script>

<style scoped>
</style>
