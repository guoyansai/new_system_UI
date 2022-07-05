<template>
    <div id="diContent_table">
        <div id="diContent_title">
            <h6></h6>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary my-2 my-lg-0" data-toggle="modal" data-target="#CP_PointsList"
                id="diContent_addBtn">
                + Add
            </button>
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
                <tr v-for="(item, key) in currentPoints[0]" :key="key" @click="getPointItem(item)">
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.DI_name }}</td>
                    <td>{{ item.digital_type }}</td>
                    <td>{{ item.digital_text }}</td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-edit" data-toggle="modal" data-target="#diUpdateModal">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x" id="deleteBtn" @click="deletePoint(item, $event)">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </td>


                </tr>
            </tbody>
        </table>

        <!--Add Modal -->
        <div class="modal fade" id="CP_PointsList" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        v-model="Physical_DI.digital">
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
        <div class="modal fade" id="diUpdateModal" tabindex="-1" aria-labelledby="diUpdateModalLabel"
            aria-hidden="true">
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
                                        v-model="Physical_DI.digital">
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
import io from "socket.io-client";
export default {
    name: "cpDIContent",

    data() {
        return {
            Physical_DI: {
                name: "",
                digital: "",
                type: "",
            },
            socket: {},
            addPointList: [],
            categoryItem: "",
            currentTab: "",
            currentPoints: [],
            currentPoint: [],
            itemKey: -1,

            currentPartition: [],
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
        // this.socket.on("server:di_List", (objs) => {
        //     this.currentPoints = []
        //     this.currentPoints.push(objs[0])
        // });

        //CP_SelectTable
        this.$bus.$on("currentPartition", (objs) => {

            // this.currentPartition.push(objs);
            console.log("objs", objs);
        });


        this.getCurrenPoints();
    },

    methods: {
        getCurrenPoints() {







        },

        addPointItem() {
            // socket.on("added", (obj) => {
            //     this.addCategoryList.push(obj);
            // });
        },
        addPoint() {
            //目前選擇的類別名稱
            //current partition / Tab
            var partition = this.currentPartition
            var tab = this.currentTab
            console.log(partition);

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

            // // //加入以下資料
            var di = this.Physical_DI;
            var DI_name = di.name;
            var digital_text = di.digital;
            var digital_type = di.type;

            var pointData = {
                DI_name: DI_name,
                digital_text: digital_text,
                digital_type: digital_type,
            };
            this.currentPoints.push(pointData);

            var addData = { partition, tab, pointData };
            console.log(addData);
            //socket.emit("add_di", addData);

            // console.log(this.currentPoints);

            $("#CP_PointsList").modal("hide");
            this.Physical_DI.name = "";
            this.Physical_DI.digital = "";
            this.Physical_DI.type = "";
        },

        getPointList() {
            var data = JSON.parse(localStorage.getItem("addPointList"));

            // console.log(data);
            if (data != null) {
                this.addPointList = data;
            }
            // console.log(this.addPointList);
        },

        getPointItem(item, key) {

            this.currentPoint.push(item)
            this.itemKey++;
            this.itemKey = key;
        },

        UpdatePoint() {
            var objs = this.currentPoint


        },
        deletePoint(item, $event) { },
    },




};
</script>

<style scoped>
#diContent_table {
    width: 100%;
    height: 90vh;
    overflow: scroll;
    border: 1px solid black;
    text-align: center;
}

#diContent_title {
    display: flex-end;
    flex-direction: row-reverse;
    width: 100%;
}

#diContent_addBtn {
    width: 70px;
    height: 30px;
    font-size: 10px;
    background-color: #007bff;
    color: white;
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