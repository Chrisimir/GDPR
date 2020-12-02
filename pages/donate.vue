<template>
  <div>
    <!-- Banner página -->
    <div class="small bg-main-color pt-3 pb-3">
      <div class="container">
        <b-col>
          <div>
            <div class="content mt-2 mt-sm-0">
              <h1>Título de ejemplo</h1>
              <p>Eslogan de tu página</p>
            </div>
          </div>
        </b-col>
      </div>
    </div>

    <div class="container mt-4">
      <div class="col">
        <div>
          <h5>¿CÓMO PUEDO COLABORAR?</h5>
          <h2>DONAR</h2>
          <p class="lead">
            Explica como ayudan las donaciones de tus visitantes
            <strong>y recalca las cosas que necesitas</strong>
          </p>

          <!-- Formulario donaciones -->
          <div class="p-2 mt-2 mb-4">
            <p>
                Completa el formulario para presentar tu donación y nos pondremos en
                contacto contigo.
            </p>
            <DonationForm />
          </div>

        <h2>SUPLIR</h2>
         <p class="lead">
            Explica como ayudan las donaciones de tus visitantes
            <strong>y recalca las cosas que necesitas</strong>
          </p>
          <div class="p-2 mt-2 mb-3">
            <p>
                Cumple la solicitud de algún necesitado. Selecciona la neceisidad
                que desees suplir.
            </p>
            <!-- Listado de solicitudes -->
            <RequestedList :requests="requestedItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DonationForm from "@/components/DonationForm";
import RequestedList from "@/components/RequestedList";

export default {
    data() {
      return {
        requestedItems: {}
      };
    },
    async fetch() {
      let requestList = await this.$axios.$get(`/backend/requests/`);
      this.requestedItems = requestList
    },
    components: [
        DonationForm,
        RequestedList
    ],
};
</script>
