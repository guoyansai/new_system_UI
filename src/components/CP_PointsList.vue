<template>
  <div>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
       <a
          class="nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          ref="nav_di"
          >DI</a>
        <a
          class="nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
          ref="nav_ai"
          >AI</a
        >
        <a
          class="nav-link"
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-contact"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
          ref="nav_dps"
          >DPS</a
        > 
      </div>
    </nav>

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
                <th scope="col">Digital Text?</th>
              </tr>
            </thead>
            
            <tbody>
              <tr 
                  v-for="(item, key) in addPointList"
                  :key="key"
                >
                <td>{{ key + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.Digital }}</td>
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

    <!-- Modal -->
    <div class="modal fade" id="CP_PointsList" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                v-model="inp_name"
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
                v-model="inp_type"
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
                <span class="input-group-text">Digital Text</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="addNameInp"
                v-model="inp_Digital"
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
            <button type="button" class="btn btn-primary" @click="addPoint">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#CP_PointsList">Add</button>

      <button type="button" class="btn btn-secondary">Update</button>

      <button type="button" class="btn btn-success">Delete</button>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
export default {
  name: "cpPointsTable",
  data() {
    return {
      
    };
  },
  mounted() {
    this.getPointList();
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Home:", newMsg);
    });
  },

  methods: {
    addPoint() {
   
      console.log("clicked");
      console.log(this.inp_name);
      console.log(this.inp_type);
      console.log(this.inp_Digital);
      var v = this

      var data = {
        name:v.inp_name,
        type:v.inp_type,
        Digital:v.inp_Digital,
      }

      v.addPointList.push(data)
      $('#CP_PointsList').modal('hide')
        v.inp_name=""
        v.inp_type=""
        v.inp_Digital=""
      console.log(v.addPointList);
      var data = JSON.stringify(v.addPointList)
      localStorage.setItem("addPointList",data)
    },
    getPointList(){
      var data = JSON.parse(localStorage.getItem("addPointList"))
     // console.log(data);
      if(data!= null){
        this.addPointList = data;
      }

    },
  },
};
</script>

<style scoped>
</style>