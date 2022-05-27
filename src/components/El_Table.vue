<template>
    <div>
        <h4>Elements</h4>
        <label>Category List</label>
        <select class="custom-select" @change="selectCategory($event)">
            <!-- <option selected>Open this select menu</option> -->
            <!--eslint-disable-next-line-->
            <option v-for="(item, key) in addCategoryList">{{ item }}</option>
        </select>
        <h4>DI List</h4>

        <div class="tab-content" id="nav-tabContent">
            <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
            >
                <div id="table">
                    <table class="table">
                        <thead class="thead-dark table-sm">
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Digital Type</th>
                                <th scope="col">Digital Text</th>
                                <th scope="col">Element</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr
                                v-for="(item, key) in addPointList"
                                :key="key"
                                @click="getPointItem(item, key)"
                                :class="{ active: key == itemKey }"
                            >
                                <td>{{ key + 1 }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.digital }}</td>
                                <td>{{ item.shopes_Yes }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
            ></div>

            <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
            ></div>
        </div>

        <button type="button" class="btn btn-primary" @click="UpdateElement()">
            Update
        </button>
        <button type="button" class="btn btn-secondary">Delete</button>

        <!-- Group Element  -->
        <div>
            <h4>Group Elements</h4>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Shope</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <!--     :class="{ active: key === itemKey }" -->
                    <tr
                        v-for="(item, key) in SelectCSItem"
                        :key="key"
                        @click="getCurrentObj(item, key)"
                    >
                        <td>{{ key + 1 }}</td>
                        <td>{{ item.setname }}</td>
                    </tr>
                </tbody>
            </table>
            <button
                type="button"
                class="btn btn-secondary"
                @click="DeleteObj()"
            >
                Delete
            </button>
            <button type="button" class="btn btn-secondary" @click="selectCS()">
                Select
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "El_Table",

    data() {
        return {
            CSItem: [],
            SelectCSItem: [],
            addPointList: [],
            addCategoryList: [],
            currentCategory: "",
            //El_ canvas
            editorCanvas: "",
            getDIitem: "",
            itemKey: -1,
            //Group Element
            ElKey: -1,
            El_Current_Item: null,

            El_Current_Obj: [],
        };
    },

    created() {},

    mounted() {
        //CS_Table.vue /get current item
        this.$bus.$on("CS_Table_Item", (data) => {
            // var canvasJson = `{"version":"5.2.1","objects":${data.shopesList}}`;
            this.CSItem = data;
        });

        //El_ editorCanvas
        this.$bus.$on("El_Canvas", (data) => {
            this.editorCanvas = data;
            console.log(this.editorCanvas);
        });

        this.getPointList();
        this.getCategoryList();
        uibuilder.onChange("msg", (newMsg) => {
            console.info("Msg received from Node-RED server in Page1:", newMsg);
            //this.msg = newMsg
        });
        //隱藏CS_Table的btn,input
        var add = document.getElementById("CS_Add_btn");
        var update = document.getElementById("CS_update_btn");
        var delet = document.getElementById("CS_delete_btn");
        var addNmae = document.getElementById("CS_addNmae_input");
        var addVal = document.getElementById("CS_addVal_input");
        add.style.display = "none";
        update.style.display = "none";
        delet.style.display = "none";
        addNmae.style.display = "none";
        addVal.style.display = "none";
    },

    methods: {
        selectCS() {
            this.SelectCSItem.push(this.CSItem);
            this.editorCanvas.clear();
        },
        getCategoryList() {
            var data = JSON.parse(localStorage.getItem("addCategoryList"));
            if (data != null) {
                this.addCategoryList = data;
            }
        },
        getPointList() {
            var data = JSON.parse(localStorage.getItem("addPointList"));
            if (data != null) {
                data.forEach((element) => {
                    this.addPointList.push(element[0].pointData);
                });
            }
        },
        getPointItem(item, key) {
            this.itemKey = key;
            if (this.itemKey === key) {
                this.getDIitem = item;
            }
        },

        UpdateElement() {
            var currentCategory = this.currentCategory;
            var itemName = this.getDIitem.name;
            var shope = this.SelectCSItem;
            var shopes_Yes = "Yes";
            var data = JSON.parse(localStorage.getItem("element"));
            //綁定Element至DI ,傳遞字串"Yes"DI LIST清單
            //1.找出目前要儲存的DI資訊

            var addPointList = JSON.parse(localStorage.getItem("element"));
            var di_item = this.getDIitem;
            // console.log(addPointList);
            // console.log(di_item);

            //2.增加字串"Yes"

            if (data === null) {
                var elementList = [];
               
                elementList.push({
                    currentCategory,
                    itemName,
                    shope,
                    shopes_Yes,
                });
                console.log(elementList);
                console.log(elementList[0].shope);
                var s = elementList[0].shope;

                //錯誤
                // if (s.length >= 0) {
                //     alert("Please Select Elements");
                //     return;
                // }
                localStorage.setItem("element", JSON.stringify(elementList));

            } else {
                data.push({ currentCategory, itemName, shope, shopes_Yes });
             
                
                localStorage.setItem("element", JSON.stringify(data));
                
            }

            this.SelectCSItem = [];
        },

        selectCategory(event) {
            var item = event.target.value;
            this.currentCategory = item;
        },
        //Group Elements
        getCurrentObj(item, key) {
            this.ElCurrentObj = item;
            var canvas = this.editorCanvas;
            var C_item = this.El_Current_Item;
            C_item = item.shopesList;

            var toString = `{"version": "5.2.1","objects":${C_item}}`;
            canvas.loadFromJSON(toString);
        },
        DeleteObj() {
            var item = this.ElCurrentObj;
            var canvas = this.editorCanvas;
            var obj = canvas.getObjects();
            var selectList = this.SelectCSItem;

            if (obj) {
                selectList.forEach((element) => {
                    var name = element.setname;
                    var cur_item = item.setname;
                    if (name === cur_item) {
                        selectList.splice(element, 1);
                    }
                });
            }
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