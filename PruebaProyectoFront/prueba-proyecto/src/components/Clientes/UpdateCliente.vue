<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Actualizar por ID"
            v-model="idCliente"
          />
          
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="searchIdCliente"
            >
              Selección
            </button>
          </div>
        </div>
    <div v-if="currentCliente.idCliente" class="edit-form">
    <h4>Cliente</h4>
    <form>
      <div class="form-group">
        <label for="title">Nombre del Cliente</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentCliente.nombreCliente"
        />
      </div>
      <div class="form-group">
        <label for="description">Id del Cliente</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentCliente.idCliente"
        />
      </div>

      <div class="form-group">
        <label><strong>Nombre cliente:</strong></label>
        {{ currentCliente.nombreCliente}}
      </div>
    </form>
</div>
</div>

</div>


    <button
      class="badge badge-primary mr-2"
      v-if="currentCliente.nombreCliente"
      @click="updateCliente(currentCliente.nombreCliente)"
    >
      ACTUALIZAR
    </button>
        
        <!-- <div class="form-group">
        <label for="nombreCliente">Nombre del Cliente</label>
        <input
          class="form-control"
          id="nombreCliente"
          required
          v-model="currentCliente.nombreCliente"
          name="nombreCliente"
        />
      </div>
      <button @click="updateCliente" class="btn btn-success">Actualizar</button>
    </div> 
      </div> -->
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
        message: ""
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
      updateCliente(nombreCliente: string) {
      let data = {
        idCliente: this.currentCliente.idCliente,
        nombreCliente: nombreCliente,
      };

      ClienteDataService.update(this.currentCliente.idCliente, data)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.currentCliente.nombreCliente= nombreCliente;
          this.message = "El cliente se actualizó";
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    },
});
  
</script>
 