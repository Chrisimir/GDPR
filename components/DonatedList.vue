<template>
  <b-table striped hover :items="donated" :fields="fields"></b-table>
</template>

<script>

export default {
  props: ["donations"],
  data() {
    return {
      fields: ["account_name", "contact_name", "email", "title", "direction", "phone", "details", "join_team", "state", "quantity"],
      donated: this.donations.rows
      
    };
  }
};
</script>