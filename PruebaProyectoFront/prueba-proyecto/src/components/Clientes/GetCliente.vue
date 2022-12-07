<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar por ID"
            v-model="idCliente"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="searchIdCliente"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <p>User ID: {{ currentCliente.idCliente }}</p>
      <p>Nombre: {{ currentCliente.nombreCliente }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import ClienteDataService from "@/services/ClienteDataService";
  import Cliente from "@/types/Cliente";
  import ResponseData from "@/types/ResponseData";
  
  export default defineComponent({
    name: "clientes-list",
    data() {
      return {
        clientes: [] as Cliente[],
        currentCliente: {} as Cliente,
        currentIndex: -1,
        idCliente: "",
      };
    },
    methods: {
       searchIdCliente() {
        ClienteDataService.findById(this.idCliente)
          .then((response: ResponseData) => {
            this.currentCliente = response.data;
            return this.currentCliente;
           // console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      },
    },
   // mounted() {
    //}
    },
  );
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>