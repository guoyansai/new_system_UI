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
                    <button type="button" class="btn btn-primary" @click="editSubmit()">Update</button>
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
                    <th scope="col">Actions
                    <th scope="col"></th>
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in addCategoryList" ref="Categorytr" @click="getCategoryItem(item, key, $event)">

                    <!-- <td>{{item.partition_id}}</td> -->
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.partition_name }}</td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit" data-toggle="modal" data-target="#onEdit_Model" @click="editCategory(item, $event)"
                        >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x" id="deleteBtn" @click="deleteSubmit(item,$event)">
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
        this.addItem();

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
                if (this.addCategoryList === "undefined") {
                    return;
                }

                this.addCategoryList = [];
                this.addCategoryList = objs;
            });
        },

        addItem() {
            socket.on("added", (obj) => {
                this.addCategoryList.push(obj);
            });
        },

        getCategoryItem(item, key, e) {
            // console.log(item);
            // console.log(key);
            //var td = e.target.parentElement.parentElement.children;
            //td.classList.add("tdActive");
            // console.log("td", td);
            // var td0 = e.target.parentElement.parentElement.children[0];
            // var td1 = e.target.parentElement.parentElement.children[1];
            // var td2 = e.target.parentElement.parentElement.children[2];
            // td0.classList.add("tdActive");
            // td1.classList.add("tdActive");
            // this.$bus.$emit("currentCategoryName", currentCategoryName);
            // var currentTab = this.selected;
            // //根據當前的item 渲染出 DI /AI /DPS ..點位名稱
            // //目前所有清單的資料
            // var PointType = JSON.parse(localStorage.getItem("addPointList"));
            // if (PointType !== null || "") {
            //     if (currentTab === "") {
            //         currentTab = "DI";
            //     }
            //     PointType.forEach((element) => {
            //         var currentCategory = element[0].currentCategory;
            //         var currentPointType = element[0].currentPointType;
            //         if (currentCategory === currentCategoryName) {
            //             if (currentTab === currentPointType) {
            //                 this.$bus.$emit("currentPoints", element);
            //             }
            //         }
            //     });
            // }
            // //  Category
            // this.itemKey = key;
            // var list = this.CategoryList;
            // list = item;
            // this.$bus.$emit("getCategoryItem", list);
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
            if (list.length < 1) {
                list.forEach((element) => {
                    var n = element.partition_name;
                    if (n === name) {
                        isExist = true;
                        this.$swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${name} is existed`,
                        });
                    }
                });
            }

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
            var td = e.target;
            td.classList.add("tdActive");
            this.onEdit_id = item.partition_id;
            this.onEdit_name = item.partition_name;
        },
        onEditCloseBtn() {
            var td = document.getElementsByClassName("tdActive")[0];
            td.classList.remove("tdActive");

            console.log("clicked");
        },
        onEditCancleBtn() {
            var td = document.getElementsByClassName("tdActive")[0];
            td.classList.remove("tdActive");

            console.log("clicked");
        },
        
        //編輯後更新Partition name
        editSubmit() {
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
                var td = document.getElementsByClassName("tdActive")[0];
                td.classList.remove("tdActive");
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
        },
        deleteSubmit(item,e) {
            console.log(e.target);
            var td = e.target;
            td.classList.add("tdActive");
            var id = item.partition_id;
            var name = item.partition_name;
            var list = this.addCategoryList;

            var data = {
                partition_id: id,
                partition_name: name,
            };
            socket.emit("Deleteing", data);

            //0 = failed / 1 = successed
            socket.on("deledted", (obj) => {
                td.classList.remove("tdActive");
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
                        td.classList.remove("tdActive");
                        if (result.isConfirmed) {
                            //console.log(list);
                            if (obj.status === 1) {
                                //console.log("obj 1 ", obj);
                                this.$swal.fire(
                                    "Deleted!",
                                    `${obj.msg}.`,
                                    "success"
                                );
                              

                                list.forEach((item, index) =>{
                                      if(data.partition_id === item.partition_id){
                                        console.log("item", item, "index", index)
                                        list.splice(0, index);
                                        return list;
                                    }
                                });
                             
                            } else if (obj.status === 0) {
                                
                                console.log("obj 0 ", obj);
                                this.$swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: `${obj.msg}.`,
                                });
                                td.classList.remove("tdActive");
                            }
                        }
                    });
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
    color: red;
    stroke: red;
}
</style>

[
    {
        "name": "1",
        "status": 0,
        "msg": "1 failed to delete"
    }
]
