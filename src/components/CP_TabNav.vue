<template>
  <div>
    <!-- <nav>
      <ul class="nav nav-tabs">
        <li v-for="tab in tabs" :key="tab" class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tab === selected }"
            @click="setTab(tab)"
          >
            {{ tab }}
          </a>
        </li>
      </ul>

      <slot></slot>
    
    </nav> -->
  </div>
</template>

<script>
export default {
  name: "cpTabNav",
  // props: {
  //   tabs: {
  //     type: Array,
  //     required: true,
  //   },
  //   selected: {
  //     type: String,
  //     required: true,
  //     //default:"DI"
  //   },
  // },

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
    // setTab(tab) {
     
    //   // console.log("TopNav setTab",tab);
    //   this.$emit("selected", tab);
    //   //this.$bus.$emit("selected", tab);
    // },
  },
};
</script>

<style scoped>
.nav-link{
  cursor: pointer;
}
.nav-link:hover{
  cursor: pointer;
  background-color: rgb(177, 177, 177);
}
.nav-tabs .nav-link.active{
  color: red; 
}


</style>