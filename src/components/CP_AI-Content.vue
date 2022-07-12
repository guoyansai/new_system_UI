<template>
    <div id="aiContent_table" v-if="isSelected">
        <slot></slot>
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
                        <button type="button" class="btn btn-primary" @click="addPoint">
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
                    <th scope="col">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#AI_Add_Modal">
                            + Add
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody id="tobdy">
                <tr v-for="(item, key) in currentPoints" :key="key">
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

export default {
    name: "cpDIContent",
    props: {
        isSelected: {
            type: Boolean
        }
    },
    data() {
        return {
            Physical_AI: {
                ai_name: "",
                ai_min: "",
                ai_max: "",
            },
            currentPoints: [],
            currentPartition: [],
            currentTab: "",
            currentPartition: {},
        };
    },

    mounted() {
        this.getCurData();
    },

    methods: {
        getCurData() {
            //from CP_.vue
            this.$bus.$on("bus:curParation", msg => {
                this.currentPartition = msg
                console.log("currentPartition", this.currentPartition);
            });
            //from CP_.vue
            this.$bus.$on("bus:curSelect", msg => {
                this.currentTab = msg
                console.log("curSelect", this.currentTab);
            });
        },
        addPoint() {
            let partition = this.currentPartition
            let tab = this.currentTab
            let name = this.Physical_AI.ai_name;
            let min_value = this.Physical_AI.ai_min;
            let max_value = this.Physical_AI.ai_max;
            if (partition.length === 0) {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Select Partition`,
                });
            }
            if (tab === "") {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Select Type`,
                });
            }
            if (partition === "Pysical Analog Input") {
                let pointData = {
                    name,
                    min_value,
                    max_value,
                }
                console.log("pointData",pointData);
                // this.currentPoints.push(pointData);

                // let addData = { partition, tab, pointData };
                // this.$socket.emit("client:AI_adding", addData)
            }
            // else {
            //      this.$swal.fire({
            //         icon: "error",
            //         title: "Oops...",
            //         text: `Please Select Object Type`,
            //     }); 

            // }



            
            this.Physical_AI.ai_name = ""
            this.Physical_AI.ai_min = ""
            this.Physical_AI.ai_max = ""
            $("#AI_Add_Modal").modal("hide");
            //this.$socket.emit("client:ai_add", ai_data);
        },
    },


};
</script>

<style scoped>
tbody tr {
    cursor: pointer;
}

#aiContent_table {
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    text-align: center;
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