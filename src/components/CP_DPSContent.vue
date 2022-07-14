<template>
    <div id="dpsContent_table" v-if="isSelected">
        <slot></slot>
        <div id="diContent_title">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success mt-2 my-sm-0" type="submit">Search</button>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DPS_addModal">
                    + Add
                </button>
            </form>
        </div>
        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Digital Type</th>
                    <th scope="col">Digital Text</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="tobdy">
                <tr v-for="(item, key) in currentPoints" :key="key" @click="getPointItem(item)">
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.DPS_name }}</td>
                    <td>{{ item.DPS_text }}</td>
                    <td>{{ item.DPS_type }}</td>

                    <td @click="editSubmit(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-edit" data-toggle="modal" data-target="#DPS_UpdateModal">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x" id="deleteBtn" @click="deleteSubmit(item)">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>

                    </td>
                </tr>
            </tbody>
        </table>

        <!--Add Modal -->
        <div class="modal fade" id="DPS_addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create Software Digital Input</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="input_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_name" v-model="Physical_DPS.name">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input_digital" class="col-sm-3 col-form-label">Digital Type</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_digital"
                                        v-model="Physical_DPS.text">
                                </div>
                            </div>

                            <fieldset class="form-group row">
                                <legend class="col-form-label col-sm-3 float-sm-left pt-0">Type</legend>
                                <div class="col-sm-8">
                                    <div class="form-check">
                                        <span>
                                            <input class="form-check-input" type="radio" name="type" id="type_sps"
                                                value="SPS" v-model.trim="Physical_DPS.type">
                                            <label class="form-check-label" for="type_sps">
                                                SPS
                                            </label>
                                        </span>

                                        <span class="radio_second">
                                            <input class="form-check-input" type="radio" name="type" id="type_dps"
                                                value="DPS" v-model.trim="Physical_DPS.type">
                                            <label class="form-check-label" for="type_dps">
                                                DPS
                                            </label>
                                        </span>

                                    </div>


                                </div>
                            </fieldset>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary" @click="addPoint">
                                    Save
                                </button>
                            </div>

                        </form>





                    </div>
                </div>
            </div>


        </div>

        <!-- Update Modal -->
        <div class="modal fade" id="DPS_UpdateModal" tabindex="-1" aria-labelledby="DPS_UpdateModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="DPS_UpdateModalTitle">
                            Update Physical Analog Input
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                          <form>
                            <div class="form-group row">
                                <label for="input_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_name" v-model="Physical_DPS.name">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input_digital" class="col-sm-3 col-form-label">Digital Type</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_digital"
                                        v-model="Physical_DPS.text">
                                </div>
                            </div>

                            <fieldset class="form-group row">
                                <legend class="col-form-label col-sm-3 float-sm-left pt-0">Type</legend>
                                <div class="col-sm-8">
                                    <div class="form-check">
                                        <span>
                                            <input class="form-check-input" type="radio" name="type" id="type_sps"
                                                value="SPS" v-model.trim="Physical_DPS.type">
                                            <label class="form-check-label" for="type_sps">
                                                SPS
                                            </label>
                                        </span>

                                        <span class="radio_second">
                                            <input class="form-check-input" type="radio" name="type" id="type_dps"
                                                value="DPS" v-model.trim="Physical_DPS.type">
                                            <label class="form-check-label" for="type_dps">
                                                DPS
                                            </label>
                                        </span>

                                    </div>


                                </div>
                            </fieldset>

                           <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary" @click="UpdatePoint">
                            Save
                        </button>
                    </div>

                        </form>
                    </div>
                   
                </div>
            </div>
        </div>


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
            Physical_DPS: {
                name: "",
                text: "",
                type: "",
            },
            old_Physical_DPS: {},
            //
            currentPoints: [],
            currentPoint: {},
            //
            currentTab: "Software Digital Input",
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
            });
            //from CP_.vue
            this.$bus.$on("bus:curSelect", msg => {
                this.currentTab = msg
            });

        },
        addPoint() {
            let partition = this.currentPartition;
            let tab = this.currentTab;
            let name = this.Physical_DPS.name;
            let text = this.Physical_DPS.text;
            let type = this.Physical_DPS.type;
            console.log("TEXT", text);
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
            if (tab === "Software Digital Input") {
                let pointData = {
                    DPS_name: name,
                    DPS_text: text,
                    DPS_type: type,
                };
                this.currentPoints.push(pointData);

                let addData = { partition, tab, pointData };
                this.$socket.emit("client:DPS_adding", addData)
                console.log("client:DPS_adding", addData);
            } else {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Select Object Type`,
                });
            }
            $("#DPS_addModal").modal("hide");
            this.Physical_DPS.name = "";
            this.Physical_DPS.text = "";
            this.Physical_DPS.type = "";

            this.$socket.on("server:DPS_added", (obj) => {
                //server傳入格式無誤,變更前台畫面資料
            })
        },
        getPointItem() { },
        UpdatePoint() { 
            let partition = this.currentPartition
            let tab = this.currentTab
            let old_ = this.old_Physical_DPS;
            let name = this.Physical_DPS.name;
            let text = this.Physical_DPS.text;
            let type = this.Physical_DPS.type;
            
            let curent  ={
                partition,
                tab
            }
            let new_ = {
                name,
                text,
                type
            }
            let data = {
                curent:curent,
                new: new_,
                old: old_,
            }
            this.$socket.emit("client:DPS_updating", data)
            this.$socket.on("server:DPS_updated", (obj) => {
                //server傳入格式無誤,變更前台畫面資料
            })
            $("#DPS_UpdateModal").modal("hide");
            this.Physical_DPS.name = "";
            this.Physical_DPS.text = "";
            this.Physical_DPS.type = "";
        },
        editSubmit(item) {
            this.Physical_DPS.name = item.DPS_name;
            this.Physical_DPS.text = item.DPS_text;
            this.Physical_DPS.type = item.DPS_type;
            this.old_Physical_DPS = item;
        },
        deleteSubmit(item) { 
            let partition = this.currentPartition;
            let tab = this.currentTab;
            let curent  ={
                partition,
                tab
            }
            let data = {
                curent:curent,
                object:item
            }
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                let cancel = result.isDismissed; //===true
                let yes = result.isConfirmed; //===true
                if (cancel) {
                    return;
                } else if (yes) {
                    
                    this.$socket.emit("client:DPS_deleteing", data);
                    
                    this.$socket.on("server:DPS_deleted", (obj) => {

                    });
                }
            })
        },
    }
};
</script>

<style scoped>
#dpsContent_table {
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    text-align: center;
}

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