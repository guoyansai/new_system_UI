<template lang="html">
    <div>
        <!-- Add Paration Modal -->
        <div class="modal fade" id="CP_SelectTable" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Paration</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="paration_name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="paration_name" v-model.trim="inp_name"
                                        required>
                                </div>
                            </div>
                        </form>



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
                            <span aria-hidden="true" @click="onEditCloseBtn()">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Name</span>
                            </div>
                            <input type="text" class="form-control" v-model="onEdit_name" required />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                            @click="onEditCancleBtn()">Cancle</button>
                        <button type="button" class="btn btn-primary" @click.lazy="UpdateCategory">Update</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="partition_table" ref="table_paration">
            <div id="partition_title">
                <h6>Partition</h6>
                <!-- Button trigger modal -->
                <button type="button" id="paration_addBtn" data-toggle="modal" data-target="#CP_SelectTable">
                    + Add
                </button>
            </div>
            <table class="table table-sm">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- @click="getCategoryItem(item)" :class="{ actived: true, 'tdActive': (item === curParation) }"-->
                    <tr v-for="(item, key) in addCategoryList" ref="Categorytr"
                        @click="$emit('selected-partition', item)">
                        <td>{{ key + 1 }}</td>
                        <td>{{ item.partition_name }}</td>
                        <td @click="editSubmit(item)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="blue" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-edit" data-toggle="modal"
                                data-target="#onEdit_Model">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-x" id="deleteBtn" @click="deleteSubmit(item)">
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
export default {
    name: "cpSelectTable",

    data() {
        return {
            inp_name: "",
            onEdit_name: "",
            old_onEdit_name: "",
            onEdit_id: null,
            addCategoryList: [],
            addCategoryItem: "",
            CategoryList: "",
            CategoryCount: 1,
            // curParation: null,
            selected: "",
            actived: false,

        };
    },
    props: {
        curparation: {
            type:Object,
            required: true,
        }
    },
   
    mounted() {
        //get all Paration list
        this.getCategory();

        setTimeout(() => {
            this.$nextTick(() => {
                if (this.$refs.Categorytr) {
                    this.$bus.$emit("categoryAlltr", this.$refs.Categorytr[0]);
                }
            });
        }, 200);

    },

    methods: {
        //???????????????Partition??????
        getCategory() {
            this.$socket.on("server:allCategory", (objs) => {
                let list = this.addCategoryList;
                if (list === "undefined") {
                    return;
                }
                if (objs.length >= 1) {
                    list.length = 0;
                    objs.forEach(element => {
                        list.push(element)
                    });
                }
                this.$socket.removeAllListeners();
            });

        },

        //??????partition
        addCategory() {
            var name = this.inp_name;
            var list = this.addCategoryList;

            if (name === null || name === "") {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `name cannot be blank`,
                });
                return;
            }
            let data = {
                partition_name: name,
            };
            //SEND DATA TO SOCKET 
            this.$socket.emit("client:adding", data);
            this.$socket.on("server:added", (obj) => {
                let msg = obj.status
                if (msg === 200) {
                    //??????????????????????????????????????????PUSH??????
                    list.push(obj.obj)
                    this.inp_name = "";
                    $("#CP_SelectTable").modal("hide");
                } else if (msg === 400) {
                    this.$swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${obj.msg}`,
                    });
                } else if (msg === 500) {
                    this.$swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${obj.msg}`,
                    });
                }
                this.$socket.removeAllListeners();
            });
        },

        // //??????Partition name
        editSubmit(item) {
            this.onEdit_id = item.partition_id;
            this.onEdit_name = item.partition_name;
            this.old_onEdit_name = item.partition_name
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

        //???????????????Partition name
        UpdateCategory() {
            let new_ = this.onEdit_name
            let old_ = this.old_onEdit_name;
            let list = this.addCategoryList;
            let data = {
                new: new_,
                old: old_,
            }
            this.$socket.emit("client:updating", data)
            this.$socket.on("server:updated", (obj) => {
                let status = obj.status
                if (status === 200) {
                    let new_ = obj.obj.new
                    let old_ = obj.obj.old
                    list.map(el => {
                        if (el.partition_name === old_) {
                            el.partition_id = el.partition_id;
                            el.partition_name = new_;
                        }
                        return list;
                    });
                    $("#onEdit_Model").modal("hide");
                } else if (status === 500) {
                    console.log("500", obj);
                    this.$swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${obj.msg}`,
                    });
                }
                this.$socket.removeAllListeners();

            });

        },


        deleteSubmit(item) {
            let list = this.addCategoryList;
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                let cancel = result.isDismissed //===true
                let yes = result.isConfirmed //===true
                if (cancel) {
                    return;
                } else if (yes) {                  
                    this.$socket.emit("client:deleteing", item);
                    this.$socket.on("server:deleted", (obj) => {
                         console.log("server:deleted", obj);
                        let msg = obj.status
                        if (msg === 200) {
                            let name = obj.obj.partition_name;
                            let result;
                            list.forEach((el, index) => {
                                if (el.partition_name === name) {
                                    result = index;
                                }
                            });
                            return list.splice(result, 1)

                        } else if (msg === 500) {
                            this.$swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: `${obj.msg}`,
                            });
                        }
                        this.$socket.removeAllListeners();
                    });
                }
            })




        },
    },

};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#partition_table {
    width: 100%;
    height: 90vh;
    overflow: scroll;
    border: 1px solid black;
}

#partition_title {
    display: flex;
    width: 100%;
}

#paration_addBtn {
    width: 70px;
    height: 30px;
    font-size: 10px;
    background-color: #007bff;
    color: white;
}

h6 {
    background: black;
    color: white;
    text-align: center;
    width: 100%;
}

tbody tr:hover {
    cursor: pointer;
    background: rgb(175, 175, 175);
}

.tdActive {
    background: rgb(175, 175, 175);
}

.over {
    /* scroll-behavior: smooth;
    overscroll-behavior: contain; */
    overflow: scroll;
}
</style>


