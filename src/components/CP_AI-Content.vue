<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#AI_Add_Modal">
            + Add
        </button>
        <!-- add Modal -->
        <div class="modal fade" id="AI_Add_Modal" tabindex="-1" aria-labelledby="AI_Add_Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="AI_Add_Label">
                            Create Physical Analog Input
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="input_ai_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_ai_name"
                                        v-model.trim="Physical_AI.ai_name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_ai_min" class="col-sm-3 col-form-label">Min Value</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_ai_min"
                                        v-model.number="Physical_AI.ai_min" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_ai_max" class="col-sm-3 col-form-label">Max Value</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_ai_max"
                                        v-model.number="Physical_AI.ai_max" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary" @click="addAI()">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Min Value</th>
                    <th scope="col">Mix Value</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="tobdy">
                <tr v-for="(item, key) in AI_List[0]" :key="key">
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.AI_name }}</td>
                    <td>{{ item.min_value }}</td>
                    <td>{{ item.max_value }}</td>

                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-edit" data-toggle="modal" data-target="#update_model">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x" id="deleteBtn">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import $ from "jquery";
import io from "socket.io-client";
export default {
    name: "cpDIContent",

    data() {
        return {
            Physical_AI: {
                ai_name: "",
                ai_min: "",
                ai_max: "",
            },
            AI_List: [],
            currentPartition:[],
        };
    },
     created() {
        this.socket = io("http://localhost:3030");
     },
    mounted() {
        uibuilder.start();
        uibuilder.onChange("msg", (msg) => {
            console.info("Msg received from Node-RED server in Home:", msg);
        });
        //CP_SelectTable
        this.$bus.$on("currentPartition", (objs) => {
           
            this.currentPartition = [];
            this.currentPartition.push(objs);
            this.socket.emit("client:ai_Partition", this.currentPartition);
            
        });

        this.socket.on("server:ai_List", (objs) => {
            console.log("server:ai_List",objs[0]);
            this.AI_List = [] 
            this.AI_List.push(objs[0])
        });
    },

    methods: {
        getAIList(){

        },
        addAI() {
            console.log("this.currentPartition",);
           
            var AI_name = this.Physical_AI.ai_name;
            var min_value = this.Physical_AI.ai_min;
            var max_value = this.Physical_AI.ai_max;
            var partition = this.currentPartition[0]
            var ai_data = {
                AI_name,
                min_value,
                max_value,
                partition
            }
            this.AI_List[0].push(ai_data)
            console.log(this.AI_List);
            this.Physical_AI.ai_name = ""
            this.Physical_AI.ai_min = ""
            this.Physical_AI.ai_max = ""
            $("#AI_Add_Modal").modal("hide");
            this.socket.emit("client:ai_add", ai_data);
        },
    },


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