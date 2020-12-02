<template>
  <b-table striped hover :items="requested" :fields="fields"></b-table>
</template>

<script>

export default {
  props: ["requests"],
  data() {
    return {
      fields: ["account_name", "contact_name", "email", "title", "direction", "phone", "details", "join_team", "state", "quantity"],
      requested: this.requests.rows
      
    };
  }
};
</script>