<template>
    <div v-if="isSelected">
      <slot></slot>

        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#CP_PointsList"
        >
            + Add
        </button>
        <!-- :class="{active: key == itemKey}" -->
        <table class="table table-striped">
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
                <tr
                    v-for="(item, key) in currentPoints"
                    :key="key"
                    @click="getPointItem(item)"
                >
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.DI_name }}</td>
                    <td>{{ item.digital_text }}</td>
                    <td>{{ item.digital_type }}</td>
                   <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit" data-toggle="modal" data-target="#update_model" @click="UpdatePoint(item, $event)"
                        >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x" id="deleteBtn" @click="deletePoint(item,$event)">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </td>
                    
                </tr>
            </tbody>
        </table>

        <!--Add Modal -->
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
                        <h5 class="modal-title">Create Physical Digital Input</h5>
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
                       <form>
                           <div class="form-group row">
                                <label for="input_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="input_name" v-model="Physical_DI.name">
                                </div>
                            </div>

                             <div class="form-group row">
                                <label for="input_digital" class="col-sm-3 col-form-label" >Digital Text</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="input_digital" v-model="Physical_DI.digital">
                                </div>
                            </div>

                             <fieldset class="form-group row">
                                <legend class="col-form-label col-sm-3 float-sm-left pt-0">Type</legend>
                                <div class="col-sm-8">
                                <div class="form-check">
                                    <span>
                                        <input class="form-check-input" type="radio" name="type" id="type_sps" value="SPS" v-model.trim="Physical_DI.type">
                                        <label class="form-check-label" for="type_sps">
                                            SPS
                                        </label>
                                    </span>

                                    <span class="radio_second">
                                        <input class="form-check-input" type="radio" name="type" id="type_dps" value="DPS" v-model.trim="Physical_DI.type">
                                        <label class="form-check-label" for="type_dps">
                                        DPS
                                        </label>
                                    </span>

                                </div>
                              
                                
                                </div>
                            </fieldset>

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

                       </form>



                        

                </div>
            </div>
        </div>
        <!-- Update Modal -->


          <div
            class="modal fade"
            id="update_model"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update Physical Digital Input</h5>
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
                       <form>
                           <div class="form-group row">
                                <label for="input_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="input_name" >
                                </div>
                            </div>

                             <div class="form-group row">
                                <label for="input_digital" class="col-sm-3 col-form-label" >Digital Text</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="input_digital">
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

                       </form>



                        

                </div>
            </div>
        </div>















        </div>
</template>

<script>

export default {
  name: "cpDPSContent",
  
  props:{
    isSelected:{
      type: Boolean
    }
  },



  data() {
    return {
    
    };
  },


  mounted() {
   
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Home:", newMsg);
    });
  },


  methods: {
   
  },



















};
</script>

<style scoped>
</style>