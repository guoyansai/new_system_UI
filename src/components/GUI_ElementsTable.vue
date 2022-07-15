<template>
    <div>
        <div id="table">
            <table class="table">
                <thead class="thead-dark table-sm">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="(item, key) in elementList"
                        :key="key"
                        :class="{ active: key == itemKey }"
                        @click="getElementItem(item, key)"
                    >
                        <td>{{ key + 1 }}</td>
                        <td>{{ item.itemName }}</td>
                    </tr>
                </tbody>
            </table>
            <button @click="get()">get</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "guiElementsTable",

    data() {
        return {
            elementList: [],
            editorCanvas: null,
            currentShoeps: [],
            groupList:[],
            itemKey:-1,
        };
    },
    mounted() {
        this.getElements();
        this.$bus.$on("gui_editorCanvas", (data) => {
            this.editorCanvas = data;
        });
    },
    methods: {
        getElements() {
            var el = JSON.parse(localStorage.getItem("element"));
            this.elementList = el;
        },

        //get a element and group
        getElementItem(item, key) {
            this.itemKey = key
            var canvas = this.editorCanvas;

            //取shopes 中的shopesList
            var shapes = item.shape;
            shapes.forEach((element) => {
                var el = element.shopesList;
                var slice_el = JSON.parse(el.slice(1, -1));

                this.currentShoeps.push(slice_el);
            });

            var str = JSON.stringify(this.currentShoeps);
            var toString = `{"version": "5.2.1","objects": ${str}}`;
            canvas.loadFromJSON(toString);
            
            var objs = canvas.getObjects();
        
         
            const group = new fabric.Group(objs, {
                left: 150,
                top: 100,
            });
            canvas.add(group).requestRenderAll();
            canvas.setActiveObject(group)
            
            console.log(group);
           
            
           
            this.currentShoeps = []
            this.groupList.push(group)
            console.log(this.groupList);
            canvas.clear()

        
        },
        get(){
             var canvas = this.editorCanvas;
            var g = this.groupList
            if(g.length >= 1){
                 g.forEach(element => {
                canvas.add(element)
                console.log(element);
                //localStorage.setItem("group",group);
                });

            this.groupList = []
            }
           
           
           
        },
    },
};
</script>

<style scoped>
.active{
    background-color: "red";
}
</style>