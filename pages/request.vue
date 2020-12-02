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
          <h5>¿CÓMO PUEDO SOLICITAR?</h5>
          <h2>SOLICITAR</h2>
          <p class="lead">
            Explica como pueden pedir ayuda tus visitantes
            <strong>y recalca las cosas que necesitas saber</strong>
          </p>

          <!-- Formulario donaciones -->
          <div class="p-2 mt-2 mb-4">
            <p>
                Completa el formulario para mandar tu solicitud
            </p>
            <RequestForm />
          </div>

        <h2>SUPLIR</h2>
         <p class="lead">
            Explica como funcionan las donaciones en tu página
            <strong>y recalca como se pide</strong>
          </p>
          <div class="p-2 mt-2 mb-3">
            <p>
                Solicita algún recurso ya
            </p>
            <!-- Listado de solicitudes -->
            <DonatedList :donations="donatedItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestForm from "@/components/RequestForm";
import DonatedList from "@/components/DonatedList";

export default {
    data() {
      return {
        donatedItems: {}
      };
    },
    async fetch() {
      let donationList = await this.$axios.$get(`/backend/donations/`);
      this.donatedItems = donationList
    },
    components: [
        RequestForm,
        DonatedList
    ],
};
</script>
