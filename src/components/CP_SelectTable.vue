<template lang="html">
   <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#CP_SelectTable">
      Add Category 
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="CP_SelectTable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
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
                v-model="inp_name"
                required
                placeholder=""
              />
            </div>
            
            <!-- <form method="POST">
              <div class="form-group">
                <label for="name">Email address</label>
                <input class="form-control" id="name" name="name" aria-describedby="emailHelp">
              </div>
              
              <button type="submit" class="btn btn-primary">Submit</button>
            </form> -->


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addCategory">Save</button>
          </div>
        </div>
      </div>
    </div>



<div id="table">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(item, key) in addCategoryList" 
          ref="Categorytr"
          @click="getCategoryItem(item,key)"
          :class=" {active:key == itemKey}">
          
            <td>{{key}}</td>
            <td>{{item}}</td>
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

    data() {
        return {
            inp_name: "",
            itemKey: -1,
            addCategoryList: [],

            CategoryList: "",
            selected: "",
        };
    },
    created() {
    },
    mounted() {
        uibuilder.start();
        uibuilder.onChange("msg", function (msg) {
            console.log(msg);
        });

        this.getCategory();

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
               console.log(response.data);
                var resp = response.data.partition_name;
                console.log(resp);
                var list = this.addCategoryList;
                list = [];
                list.push(resp);
            });
        },

        addCategory() {
            var name = this.inp_name;
            var list = this.addCategoryList;
            if (name === null || name === "") {
                alert("naame cannot be blank");
                return;
            }
            this.$http
                .post(api, name)

                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            $("#CP_SelectTable").modal("hide");
            list.push(name);
            name = "";

            socket.emit("addCategory", name);
        },
        getCategoryItem(item, key) {
            var currentCategoryName = item;
            this.$bus.$emit("currentCategoryName", currentCategoryName);
            var currentTab = this.selected;
            //根據當前的item 渲染出 DI /AI /DPS ..點位名稱
            //目前所有清單的資料
            var PointType = JSON.parse(localStorage.getItem("addPointList"));

            if (PointType !== null || "") {
                if (currentTab === "") {
                    currentTab = "DI";
                }

                PointType.forEach((element) => {
                    var currentCategory = element[0].currentCategory;
                    var currentPointType = element[0].currentPointType;
                    if (currentCategory === currentCategoryName) {
                        if (currentTab === currentPointType) {
                            this.$bus.$emit("currentPoints", element);
                        }
                    }
                });
            }

            //  Category

            this.itemKey = key;
            var list = this.CategoryList;
            list = item;
            this.$bus.$emit("getCategoryItem", list);
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
</style>