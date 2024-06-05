<template> 
    <h1 style="text-align: left;">
        Tus tareas.
    </h1>
    <div style="text-align: right;">
        <router-link to="/nuevatarea">
        <button class="green-button" >Nueva tarea</button>
        </router-link>
        <router-link to="/login">
        <button class="green-button" style="background-color: gray;">Logout</button>
        </router-link>
    </div>
    <div class="grid-wrap">

      
    </div>
      <div class="product-item" v-for="tarea in tareas" :key="tarea.id">
            <h3 class="product-name">{{ tarea.name }}</h3>
            <p class="product-price">{{ tarea.descripcion }}</p>
            <button @click="eliminarTarea(tarea.id)" class="remove-button"> Eliminar tarea</button>
        </div>
    
  </template>
  
  <script>
  import axios from 'axios'
//   import {tareas} from '../temp-data.js'

  export default {
    name: 'PaginaTareas',
    data(){
        return{
            tareas: [],
        } 
    },
    methods: {
        async eliminarTarea(tarea_id){
            console.log("elimino tarea", tarea_id);
            await axios.delete('/api/tareas/' + tarea_id);
            console.log("tarea eliminada: " + tarea_id)
            location.reload();
        }
    },
    async created() { //carga tareas por api//
        const response = await axios.get('/api/tareas');
        const tareas = response.data;
        this.tareas = tareas;
        
    }
  }
  </script>
  
