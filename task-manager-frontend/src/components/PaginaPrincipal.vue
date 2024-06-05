<template>
    <div class="hello">
      <h1>Gestor de tareas</h1>
      <h3>Con esta aplicación podrás gestionar tus tareas de manera simple...</h3>
      <h4>Sólo necesitas iniciar sesión y podrás ver tus tareas, eliminar y crear nuevas. </h4>
      <h2 style="padding-top: 20px;">BUENA SUERTE!</h2>
      <router-link to="/login">
      <button class="grey-button">Inicia Sesión Aquí...</button>
    </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaginaPrincipal',
  }
  </script>
  
