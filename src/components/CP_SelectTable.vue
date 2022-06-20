<template lang="html">
<div>
    
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#CP_SelectTable">
        + Add Paration
    </button>

    <!-- Add Paration Modal -->
    <div class="modal fade" id="CP_SelectTable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Paration</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Name</span>
                        </div>
                        <input type="text" class="form-control" id="addNameInp" v-model.trim="inp_name" required />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
                    <button type="button" class="btn btn-primary" @click.prevent="addCategory()">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!-- onEdit Pration Modal -->
    <div class="modal fade" id="onEdit_Model" tabindex="-1" aria-labelledby="onEditModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="onEditModalLabel">Update Paration</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"  @click="onEditCloseBtn()">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Name</span>
                        </div>
                        <input type="text" class="form-control" id="onEditNameInp" v-model="onEdit_name" required />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="onEditCancleBtn()">Cancle</button>
                    <button type="button" class="btn btn-primary" @click="UpdateCategory()">Update</button>
                </div>
            </div>
        </div>
    </div>

    <div id="table">
        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Actions </th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in addCategoryList" ref="Categorytr" @click="getCategoryItem(item ,$event)">

                    <!-- <td>{{item.partition_id}}</td> -->
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.partition_name }}</td>
                    <td @click="editCategory(item, $event)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" 
                         stroke-linejoin="round" class="feather feather-edit" data-toggle="modal" 
                         data-target="#onEdit_Model"
                        >
                        <!--   -->
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>

                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x" id="deleteBtn" @click="deleteSubmit(item,$event)">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </td>
                 

                </tr>

            </tbody>
        </table>
    </div>

</div>
</template>

<script>
import $ from "jquery";

var socket = io("http://localhost:3030");

var api = "http://127.0.0.1:1880/PARATION";
export default {
    name: "cpSelectTable",
    inject: ["reload"], //注入依赖
    data() {
        return {
            inp_name: "",
            onEdit_name: "",
            onEdit_id: null,
            itemKey: -1,
            addCategoryList: [],
            addCategoryItem: "",
            CategoryList: "",
            CategoryCount: 1,
            currentCategoryName: null,
            selected: "",
        };
    },

    mounted() {
        //get all Paration list
        this.getCategory();
        //new a item
        this.addCItem();

        setTimeout(() => {
            this.$nextTick(() => {
                if (this.$refs.Categorytr) {
                    this.$bus.$emit("categoryAlltr", this.$refs.Categorytr[0]);
                }
            });
        }, 200);

        this.$bus.$on("selected", (data) => {
            this.selected = data;
        });

        socket.on("Updated", (objs) => {
            var list = this.addCategoryList;
            list.map((item) => {
                if (item.partition_id === objs.partition_id) {
                    item.partition_id = objs.partition_id;
                    item.partition_name = objs.partition_name;
                }
                return list;
            });
        });
    },

    methods: {
        //當前正在DI點清單
        getselectedTab() {
            var selected = this.selected;
            this.$bus.$emit("getselectedTab", selected);
            //console.log(selected);
            if (selected != "") {
                selected;
            } else {
                alert("not select categoryTab");
            }
        },

        //讀取資料庫Partition資料
        getCategory() {
            socket.on("allCategory", (objs) => {
                if (objs === "Not Data" || objs.length <= 0) {
                    return;
                }
                if (this.addCategoryList === "undefined") {
                    return;
                }
                if (objs.length >= 1) {
                    this.addCategoryList = [];
                    this.addCategoryList = objs;
                }
            });
        },

        addCItem() {
            socket.on("added", (obj) => {
                this.addCategoryList.push(obj);
            });
        },

        getCategoryItem(item, e) {
         
            this.$bus.$emit("currentCategory",item)
        },

        //新增partition
        addCategory() {
            var name = this.inp_name;
            var list = this.addCategoryList;
            var isExist = false;
            if (name === null || name === "") {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `name cannot be blank`,
                });
                return;
            }
            //Check if it has the same name
            list.forEach((item) => {
                var n = item.partition_name;
                if (n === name) {
                    isExist = true;
                    console.log("same name", n);
                    this.$swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${name} is existed`,
                    });
                    return;
                }
            });

            var data = {
                partition_name: name,
            };
            if (isExist === false) {
                this.inp_name = "";
                $("#CP_SelectTable").modal("hide");
                socket.emit("addCategory", data);
                this.getCategory();
            }
        },

        //編輯Partition name
        editCategory(item, e) {
            // console.log("e.target.children[0]",e.target.children[0]);
            // var td = e.target.children[0];
            // td.classList.add("tdActive");
            this.onEdit_id = item.partition_id;
            this.onEdit_name = item.partition_name;
        },
        onEditCloseBtn() {
            // var td = document.getElementsByClassName("tdActive")[0].children[0];
            //console.log("onEditCloseBtn",td);
            //td.classList.remove("tdActive");
        },
        onEditCancleBtn() {
            //var td = document.getElementsByClassName("tdActive")[0].children[0];
            // console.log("onEditCancleBtn",td);
            //td.classList.remove("tdActive");
        },

        //編輯後更新Partition name
        UpdateCategory() {
            //var td = document.getElementsByClassName("tdActive")[0];
            //td.classList.remove("tdActive");
            var value = document.getElementById("onEditNameInp").value;

            var id = this.onEdit_id;
            var name = this.onEdit_name;
            var list = this.addCategoryList;

            var isExisted = false;
            list.forEach((element) => {
                var n = element.partition_name;
                if (n === value) {
                    isExisted = true;
                    this.$swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${name} is existed`,
                    });
                }
            });
            var data = {
                partition_id: id,
                partition_name: value,
            };

            if (isExisted === false) {
                //remove active style
                //var td = document.getElementsByClassName("tdActive")[0];
                //td.classList.remove("tdActive");
                list.map((item) => {
                    if (item.partition_id === id) {
                        item.partition_id = data.partition_id;
                        item.partition_name = data.partition_name;
                    }
                    return list;
                });

                $("#onEdit_Model").modal("hide");
                socket.emit("Updateing", data);
            }
            this.getCategory();
        },

        //

        delectItem() {},

        deleteSubmit(item, e) {
            var name = item.partition_name;
            socket.emit("Deleteing", item);

            this.$swal
                .fire({
                    title: `Do you really want to delet?`,
                    text: `Name: ${name}`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        socket.on("deleted", (obj) => {
                            this.addCategoryList.forEach((item, index) => {
                                if (item.partition_name === obj.name) {
                                    this.addCategoryList.splice(index, 1);
                                }
                            });
                            console.log(this.addCategoryList);
                        });
                        this.$swal.fire("Deleted!", `${name}.`, "successfully");
                    } else if (result.isDismissed) {
                        console.log("isDismissed", result);

                        this.$swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${name} is existed`,
                        });
                    }
                });
        },
    },
};
</script>

<style scoped>
tbody tr:hover {
    cursor: pointer;
    background: rgb(175, 175, 175);
}

.tdActive {
    /* color: yellow; */
    background: rgb(175, 175, 175);
    /* stroke: yellow; */
}
</style>


