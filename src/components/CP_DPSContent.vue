<template>
    <div id="dpsContent_table">
        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Digital Type</th>
                    <th scope="col">Digital Text</th>
                    <th scope="col">Actions</th>
                    <th>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DPS_PointsList">
                            + Add
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody id="tobdy">
                <tr>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>

                    <td>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-edit" data-toggle="modal" data-target="#diUpdateModal">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x" id="deleteBtn">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>

                    </td>


                </tr>
            </tbody>
        </table>


    </div>






</template>

<script>
import $ from "jquery";

export default {
    name: "cpDIContent",


    data() {
        return {

        };
    },

    created() {

        //CP_SelectTable
        this.$bus.$on("selected", (data) => {
            //console.log("DI Tag",data);
            this.selectedTab = data;
        });

    },

    mounted() {
        uibuilder.start();
        uibuilder.onChange("msg", (msg) => {
            console.info("Msg received from Node-RED server in Home:", msg);
        });

    },

    methods: {
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