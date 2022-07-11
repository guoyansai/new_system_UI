<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="tab in tabs" :key="tab" class="breadcrumb-item">
          <!--  @click="setTab(tab)" -->
          <a class="nav-link" :class="{ active: tab === selected }" @click="setTab(tab)">
            {{ tab }}
          </a>
        </li>
      </ol>

      <slot></slot>

    </nav>
  </div>
</template>

<script>
export default {
  name: "cpTabNav",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
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
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}

.nav-link:hover {
  cursor: pointer;
  color: red;
}

.active {
  color: red;
  /* border: 1px solid black; */
  border-bottom: 1px solid red;
  ;
}

.breadcrumb-item+.breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "";
}

.breadcrumb {
  padding: 0.25rem 1rem;
  font-size: 12px;
  margin: 0;
  border-radius: 0rem;
}
</style>