<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="idCliente">Id del Cliente</label>
          <input
            type="text"
            class="form-control"
            id="idCliente"
            required
            v-model="cliente.idCliente"
            name="idCliente"
          />
        </div>
  
        <div class="form-group">
          <label for="nombreCliente">Nombre del Cliente</label>
          <input
            class="form-control"
            id="nombreCliente"
            required
            v-model="cliente.nombreCliente"
            name="nombreCliente"
          />
        </div>
  
        <button @click="saveCliente" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newCliente">Add</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import ClienteDataService from "@/services/ClienteDataService";
  import Cliente from "@/types/Cliente";
  import ResponseData from "@/types/ResponseData";
  
  export default defineComponent({
    name: "add-cliente",
    data() {
      return {
        cliente: {
          idCliente: "" ,
          nombreCliente: "",
          
        } as Cliente,
        submitted: false,
      };
    },
    methods: {
      saveCliente() {
        let data = {
          idCliente: this.cliente.idCliente,
          nombreCliente: this.cliente.nombreCliente,
        };
  
        ClienteDataService.create(data)
          .then((response: ResponseData) => {
            this.cliente.idCliente = response.data.idCliente;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e: Error) => {
            console.log(e);
          });
      },
  
      newCliente() {
        this.submitted = false;
        this.cliente = {} as Cliente;
      },
    },
  });
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  