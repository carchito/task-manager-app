<template>
  <div class="container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="iniciarSesion">
      <input type="text" id="username" placeholder="Nombre de Usuario" required>
      <input type="password" id="password" placeholder="Contraseña" required>
      <button >Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaginaLogin',
  methods: {
    iniciarSesion() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      
      if (user === "admin" && pass == "admin") {
        alert('Iniciando sesión...');
        window.location.href = "/tareas";
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }
}
</script>

  
<style scoped>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
      text-align: center;
    }

    input[type="text"],
    input[type="password"],
    button {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 3px;
      box-sizing: border-box;
    }

    button {
      background-color: black;
      color: #fff;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
</style>