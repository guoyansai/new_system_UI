<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">
                    <cpSelectTable @selected-partition="onSelectedPartition" :curparation="curparation" />
                </div>
                <div class="col-sm-9">
                    <cpTabNav :tabs="['Pysical Digital Input', 'Pysical Analog Input', 'Software Digital Input']"
                        :selected="selected" @selected="setSelected">
                        <div>
                            <cpDIContent :isSelected="selected === 'Pysical Digital Input'" />
                        </div>
                        <div>
                            <cpAIContent :isSelected="selected === 'Pysical Analog Input'" />
                        </div>
                        <div>
                            <cpDPSContent :isSelected="selected === 'Software Digital Input'" />
                        </div>

                    </cpTabNav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cpSelectTable from "./CP_SelectTable.vue";
import cpPointsTable from "./CP_PointsList.vue";
import cpTabNav from "./CP_TabNav.vue";
import cpDIContent from "./CP_DI-Content.vue";
import cpAIContent from "./CP_AI-Content.vue";
import cpDPSContent from "./CP_DPSContent.vue";



export default {
    name: "cp",

    components: {
        cpSelectTable,
        cpPointsTable,
        cpTabNav,
        cpDIContent,
        cpAIContent,
        cpDPSContent,
    },

    data() {
        return {
            socket: {},
            selected: "Pysical Digital Input",
            curparation: {},
        };
    },
    provide() {
        const paration = {}
         Object.defineProperty(paration, "curparation", {
            enumerable: true,
            get: () => this.curparation,
        })
         return {
            onSelectedPartition: this.onSelectedPartition,
            paration,
        }
    },
    created() {
        this.socket = io("http://localhost:3030");
    },

    mounted() {

    },
    provide() {
        return {
            selected: this.selected,
            curparation: this.curparation
        }
    },
    computed:{
          onSelectedPartition(value) {
            console.log(value);
            // this.curparation = value
            // console.log("this", this.curparation);
            // this.socket.emit("client:curParation", this.curparation)
        },
    },
    methods: {
        setSelected(value) {
            this.selected = value;
            this.socket.emit("client:curSelect", this.selected)
        },
      
    },
};
</script>

<style scoped>
.nav-link {
    cursor: pointer;
}

.BgColor {
    color: white;
    font-weight: bolder;
    background-color: rgb(136, 136, 136);
}
</style>