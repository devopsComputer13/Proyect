<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Prueba</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/clientelist" class="nav-link">Clientes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addcliente" class="nav-link">Add</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/actualizarcliente" class="nav-link">Actualizar</router-link>
        </li> 
        <li class="nav-item">
          <router-link to="/deletecliente" class="nav-link">Borrar</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li> -->
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

