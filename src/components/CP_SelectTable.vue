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
              <input
                type="text"
                class="form-control"
                id="addNameInp"
                v-model.trim="inp_name"
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Name</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="onEditNameInp"
                v-model="onEdit_name"
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody >
          <tr v-for="(item, key) in addCategoryList" 
          ref="Categorytr"
          @click="getCategoryItem(item,$event)">
          
            <!-- <td>{{item.partition_id}}</td> -->
            <td>{{key + 1}}</td>
            <td>{{item.partition_name}}</td>
            <td>
              <img src="../icons/edit.svg" class="icon" id="editBtn"
                   data-toggle="modal" data-target="#onEdit_Model" 
                   @click="editCategory(item ,key)" >
              <img src="../icons/x.svg" class="icon" id="deleteBtn"
               @click="deleteSubmit(item)">
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
            CategoryList: "",
            CategoryCount: 1,
            currentCategoryName:null,
            selected: "",
        };
    },

    created() {},
    mounted() {
        uibuilder.start();
        uibuilder.onChange("msg", function (msg) {
            console.log(msg);
        });
        this.$nextTick(() => {
            this.getCategory();
        });
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

        //getCateogry socket
        var list = this.addCategoryList;
        socket.on("Category", function (obj) {
            list.push(obj);
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

        getCategory() {
            this.$http.get(api).then((response) => {
                var resp = response.data;
                this.addCategoryList = [];
                this.addCategoryList = resp;
            });
        },

        getCategoryItem(item,e) {
          var td  =e.target.parentElement.parentElement
          td.style.backgroundColor  = "red";
            this.currentCategoryName = td;
            
            console.log(this.currentCategoryName);
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
            if (isExist === false) {
                this.$http
                    .post(api, {
                        // partition_id: id,
                        partition_name: name,
                    })

                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                this.inp_name = "";
                $("#CP_SelectTable").modal("hide");
                list.push({ partition_name: name });

                socket.emit("addCategory", name);
            }
        },

        editCategory(item, key) {
          
            // 
           console.log( this.currentCategoryName);
           // console.log(this.currentCategoryName);
            this.onEdit_id = item.partition_id;
          
            this.onEdit_name = item.partition_name;
        },
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
                    alert(`${name} is existed`);
                }
            });

            if (isExisted === false) {
                this.$http
                    .put(api, { partition_id: id, partition_name: value })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log("Error: Update data ", error);
                    });
                $("#onEdit_Model").modal("hide");
                this.getCategory();
            }
        },
        deleteSubmit(item) {
            var id = item.partition_id;
            var name = item.partition_name;
            var data = {
                partition_id: id,
                partition_name: name,
            };
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
                        this.$swal.fire(
                            "Deleted!",
                            `Your Name: ${name} deleted.`,
                            "success"
                        );
                        this.$http
                            .delete(api, { data })
                            .then((response) => {
                                console.log(response);
                                this.getCategory();
                            })
                            .catch(function (error) {
                                console.log("Error: Delete data ", error);
                            });
                    }
                });
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
}
.icon:hover {
    color: white;
    background-color: yello;
}
</style>