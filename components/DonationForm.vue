<template>
  <div>
    <b-card bg-variant="light">
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          label-cols-lg="3"
          label="Formulario donaciones"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label-cols-sm="3"
            label="Nombre de tu organización:"
            label-align-sm="right"
            label-for="nested-account_name"
          >
            <b-form-input
              v-model="form.account_name"
              id="nested-account_name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Nombre de contacto:"
            label-align-sm="right"
            label-for="nested-contact_name"
          >
            <b-form-input
              v-model="form.contact_name"
              id="nested-contact_name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Email:"
            label-align-sm="right"
            label-for="nested-email"
          >
            <b-form-input v-model="form.email" id="nested-email"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Descripción donación:"
            label-align-sm="right"
            label-for="nested-details"
          >
            <b-form-input
              v-model="form.details"
              id="nested-details"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Cantidad:"
            label-align-sm="right"
            label-for="nested-quantity"
          >
            <b-form-input
              v-model="form.quantity"
              type="number"
              id="nested-quantity"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Teléfono:"
            label-align-sm="right"
            label-for="nested-phone"
          >
            <b-form-input v-model="form.phone" id="nested-phone"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Dirección:"
            label-align-sm="right"
            label-for="nested-direction"
          >
            <b-form-input
              v-model="form.direction"
              id="nested-direction"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Título donación:"
            label-align-sm="right"
            label-for="nested-title"
          >
            <b-form-input v-model="form.title" id="nested-title"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label-align-sm="right"
            class="mb-0"
          >
            <b-form-checkbox v-model="form.state" value="0" unchecked-value="1">Unirme al equipo</b-form-checkbox>
          </b-form-group>
        </b-form-group>
        <div class="w-100 text-center pt-4">
          <b-button type="submit" align="right" variant="primary"
            >Enviar</b-button
          >
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        account_name: "",
        contact_name: "",
        email: "",
        title: "",
        direction: "",
        phone: "",
        details: "",
        join_team: 0,
        state: 0,
        quantity: undefined,
      },
    };
  },
  methods: {
    onSubmit: async function() {
      let response = await axios({
                        method: "POST",
                        url: "/backend/donations/",
                        data: this.form
                    });
      if (response.status !== 200) {
          // @todo avisa de que está hecho
          console.log("Enviado con éxito");
      }
    },
  },
};
</script>