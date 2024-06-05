<template>
  <h1 style="text-align: left;">
    Nueva Tarea:
  </h1>
    
  <div class="grid-wrap">
    <input type="text" id="name" placeholder="Nombre de la tarea" style="display: block;" required>
    <input type="text" id="descripcion" placeholder="Descripción de la tarea" style="display: block;" >
    <button class="green-button" @click="crearTarea()">Crear tarea</button>
  </div>

</template>
  
<script>
  import axios from 'axios';

  export default {
    name: 'PaginaPrincipal',
    data(){
      return{
        max_id:0
      }
    },
    methods:{
      async crearTarea(){
        // armo objeto //
        let tarea_nueva ={};
        tarea_nueva.id = (this.max_id + 1).toString();
        tarea_nueva.name = document.getElementById("name").value;
        tarea_nueva.descripcion = document.getElementById("descripcion").value;
        console.log(tarea_nueva);
        //
        // Envio el objeto por body //
        try{
          const response = await axios.post('/api/tareas',tarea_nueva);
          console.log(response)
          alert("Se ha creado una nueva tarea");    
          window.location.href = "/tareas";
        }catch(error){
          alert("Ha ocurrido un error y no se pudo crear una nueva tarea");
        }
        //
      },
      
    },
    async created() { //carga tareas por api//
      const response = await axios.get('/api/tareas');
      const tareas = response.data;
      tareas.forEach(tarea => {
        if(tarea.id > this.max_id){
          this.max_id = tarea.id;
        }
      });

    }
  }
</script>
  


