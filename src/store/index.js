import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: () => ({
        shapeStatus: [],
        curShapeStatus:"",
        curPartition:{},
        curTab:"Pysical Digital Input",
        // input:{
        //     width:null,
        //     height:null,
        //     color:null,
        //     x:null,
        //     y:null,
        //     borderW:null,
        //     borderC:null,
        // }
        
    }),
    actions: {
        updatePartitionStatus(context, status){
            context.commit('PartitionStatus', status)   
        },
        updateTabStatus(context, status){
            context.commit('TabStatus', status)   
        },

        updateShapeStatus(context, status){
            context.commit('ShapeStatus', status)   
        },
        curShapeStatus(context, status){
            context.commit('curShapeStatus', status)   
        },
    },
    mutations: {
        PartitionStatus(state, status){ 
            state.curPartition = status
        },
        TabStatus(state, status){ 
            state.curTab = status
        },
        ShapeStatus(state, status){
            state.shapeStatus.push(status)
        },
        curShapeStatus(state, status){
            state.curShapeStatus = status
        },
        // updateWidth(state, status){
        //     state.input.width = status
        // },
        // updateHeight(state, status){
        //     state.input.height = status
        // }
    },

    modules: {
    }



});
export default store;