<template>
    <div v-if="isSelected">
        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#CP_PointsList"
        >
            Add
        </button>
        <!-- :class="{active: key == itemKey}" -->
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Digital Type</th>
                    <th scope="col">Digital Text?</th>
                </tr>
            </thead>
            <tbody id="tobdy">
                <tr
                    v-for="(item, key) in currentPoints"
                    :key="key"
                    @click="getPointItem(item)"
                >
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.digital }}</td>
                    <td>
                     
                    </td>
                    
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div
            class="modal fade"
            id="CP_PointsList"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add DI</h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
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
                                v-model="inp_nameDI"
                                required
                                placeholder=""
                            />
                        </div>

                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Type</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                id="addNameInp"
                                v-model="inp_typeDI"
                                required
                                placeholder=""
                            />
                            <!-- <select>
                <option value="1">SPS</option>
                <option value="2">DPS</option>
              </select> -->
                        </div>

                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    >Digital Text</span
                                >
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                id="addNameInp"
                                v-model="inp_digitalDI"
                                required
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="addPoint"
                        >
                            Save
                        </button>
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
        },
    },

    data() {
        return {
            inp_nameDI: "",
            inp_typeDI: "",
            inp_digitalDI: "",
            addPointList: [],
            categoryItem: "",
            currentCategoryName: [],
            currentPoints: [],
            //current tab
            selectedTab: {},
            itemKey: -1,
            defaultCategory: "",
        };
    },

    created() {
        //當前正在的類別清單名稱
        this.$bus.$on("getCategoryItem", (data) => {
            //Category Name
            this.categoryItem = data;
        });
        //this.$emit('selected',tab)
        //CP_SelectTable
        this.$bus.$on("selected", (data) => {
            this.selectedTab = data;
            //console.log("166 this.selectedTab",this.selectedTab);
        });

        //CP_SelectTable.vue
        this.$bus.$on("categoryAlltr", (data) => {
            this.defaultCategory = data;
        });
        //CP_SelectTable
        this.$bus.$on("currentCategoryName", (data) => {
            //讀取當前選擇的Partition name
           
           this.currentCategoryName = data;
        });
    },

    mounted() {
        uibuilder.start();
        uibuilder.onChange("msg", (msg) => {
            console.info("Msg received from Node-RED server in Home:", msg);
        });
        //CP_SelectTable.vue
        // this.$bus.$on("currentPoints", (data) => {
        //     this.currentPoints.push(data);
        // });
    },

    methods: {
        addPoint() {
            //目前選擇的類別名稱
            var partition = this.currentCategoryName;
            var tab = this.selectedTab;

            // //加入以下資料
            var name = this.inp_nameDI;
            var type = this.inp_typeDI;
            var dig = this.inp_digitalDI;
            var pointData = {
                name: name,
                type: type,
                digital: dig,
            };

            
            this.currentPoints.push(pointData)

            var addData = { partition, tab, pointData };
            console.log("addData",addData);

            

            console.log(this.currentPoints);

            $("#CP_PointsList").modal("hide");
            this.inp_nameDI = "";
            this.inp_typeDI = "";
            this.inp_digitalDI = "";

            //默認為第一筆資料並加入css style
            // currentCategory = CategoryList[0]
            //  currentPointType = "DI";
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
          
            console.log(item);
            this.itemKey++;
            this.itemKey = key;
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
</style>