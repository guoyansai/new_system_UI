<template>
    <div id="diContent_table" v-if="isSelected">
        <slot></slot>
        <div id="diContent_title">
            <form class="form-inline my-2 my-lg-0">
                <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success mt-2 my-sm-0" type="submit">Search</button> -->
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary mr-2" data-toggle="modal" data-target="#DI_addModal"
                    id="diContent_addBtn">
                    + Add
                </button>
            </form>
        </div>

        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Digital Text</th>
                    <th scope="col">Digital Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="tobdy">
                <tr v-for="(item, key) in currentPoints" :key="key" @click="getPointItem(item)">
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.DI_name }}</td>
                    <td>{{ item.DI_text }}</td>
                    <td>{{ item.DI_type }}</td>
                    <td @click="editSubmit(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-edit" data-toggle="modal" data-target="#DI_UpdateModal">
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
        <div class="modal fade" id="DI_addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create Physical Digital Input</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="input_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_name" v-model="Physical_DI.name">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input_digital" class="col-sm-3 col-form-label">Digital Text</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_digital"
                                        v-model="Physical_DI.text">
                                </div>
                            </div>

                            <fieldset class="form-group row">
                                <legend class="col-form-label col-sm-3 float-sm-left pt-0">Digital Type</legend>
                                <div class="col-sm-8">
                                    <div class="form-check">
                                        <span>
                                            <input class="form-check-input" type="radio" name="type" id="type_sps"
                                                value="SPS" v-model.trim="Physical_DI.type">
                                            <label class="form-check-label" for="type_sps">
                                                SPS
                                            </label>
                                        </span>

                                        <span class="radio_second">
                                            <input class="form-check-input" type="radio" name="type" id="type_dps"
                                                value="DPS" v-model.trim="Physical_DI.type">
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
        <div class="modal fade" id="DI_UpdateModal" tabindex="-1" aria-labelledby="DI_UpdateModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update Physical Digital Input</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="input_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_name" v-model="Physical_DI.name">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input_text" class="col-sm-3 col-form-label">Digital Text</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_text" v-model="Physical_DI.text">
                                </div>
                            </div>

                            <fieldset class="form-group row">
                                <legend class="col-form-label col-sm-3 float-sm-left pt-0">Type</legend>
                                <div class="col-sm-8">
                                    <div class="form-check">
                                        <span>
                                            <input class="form-check-input" type="radio" name="type" id="type_sps"
                                                value="SPS" v-model.trim="Physical_DI.type">
                                            <label class="form-check-label" for="type_sps">
                                                SPS
                                            </label>
                                        </span>

                                        <span class="radio_second">
                                            <input class="form-check-input" type="radio" name="type" id="type_dps"
                                                value="DPS" v-model.trim="Physical_DI.type">
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
                                <button type="button" class="btn btn-primary" @click="UpdatePoint()">
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
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            Physical_DI: {
                name: "",
                text: "",
                type: "",
            },
            old_Physical_DI: {},

            currentPoints: [],
            currentPoint: {},
            //
            currentTab: "Pysical Digital Input",
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
            //current partition / Tab
            let partition = this.currentPartition
            let tab = this.currentTab
            let DI_name = this.Physical_DI.name;
            let text = this.Physical_DI.text;
            let type = this.Physical_DI.type;
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
            if (tab === "Pysical Digital Input") {
                let pointData = {
                    DI_name: DI_name,
                    DI_text: text,
                    DI_type: type,
                };

                this.currentPoints.push(pointData);

                let addData = { partition, tab, pointData };
                this.$socket.emit("client:DI_adding", addData)

                console.log("addData", addData);
            } else {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Select Object Type`,
                });
            }
            $("#DI_addModal").modal("hide");
            this.Physical_DI.name = "";
            this.Physical_DI.text = "";
            this.Physical_DI.type = "";
            this.$socket.on("server:DI_added", (obj) => {
                //server傳入格式無誤,變更前台畫面資料
            })
        },
        getPointItem(item) {
            this.currentPoint = item
        },

        editSubmit(item) {
            this.Physical_DI.name = item.DI_name;
            this.Physical_DI.text = item.DI_text;
            this.Physical_DI.type = item.DI_type;
            this.old_Physical_DI = item;
        },
        UpdatePoint() {
            let partition = this.currentPartition
            let tab = this.currentTab
            let old_ = this.old_Physical_DI;
            let name = this.Physical_DI.name;
            let text = this.Physical_DI.text;
            let type = this.Physical_DI.type;

            let curent = {
                partition,
                tab
            }
            let new_ = {
                name,
                text,
                type
            }
            let data = {
                curent: curent,
                new: new_,
                old: old_,
            }
            this.$socket.emit("client:DI_updating", data)
            console.log("client:DI_updating", data);
            this.$socket.on("server:DI_updated", (obj) => {
                //server傳入格式無誤,變更前台畫面資料
            })
            $("#DI_UpdateModal").modal("hide");
            this.Physical_DI.name = "";
            this.Physical_DI.text = "";
            this.Physical_DI.type = "";

        },
        deleteSubmit(item) {
            let partition = this.currentPartition;
            let tab = this.currentTab;
            let curent = {
                partition,
                tab
            }
            let data = {
                curent: curent,
                object: item
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
                    this.$socket.emit("client:DI_deleteing", data);
                    this.$socket.on("server:DI_deleted", (obj) => {

                    });
                }
            })
        },
    },




};
</script>

<style scoped>
#diContent_table {
    width: 100%;
    height: 90vh;
    overflow: scroll;
    text-align: center;
    /* border: 1px solid black; */
    background-color: rgb(233, 236, 239);
    ;
}

#diContent_title {
    display: flex-end;
    flex-direction: row-reverse;
    width: 100%;
}

#diContent_addBtn {
    /* width: 70px;
    height: 30px;
    font-size: 10px;
    background-color: #007bff;
    color: white; */
    position: absolute;
    right: 5%;
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