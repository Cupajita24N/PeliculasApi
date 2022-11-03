<template>
  <v-footer dark padless>
    <v-card-text> </v-card-text>

    <v-divider></v-divider>

    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>@Nicolas Cupajita</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
</style>