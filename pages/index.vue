<template>
  <b-container id="vin" fluid>
    <b-row>
      <h3 class="ml-3">
        Notre carte de vins:
      </h3>
    </b-row>
    <b-row class="align-items-center">
      <b-col cols="8">
        <h7 class="text-center">
          Nos vins blancs:
        </h7>
      </b-col>
      <b-col cols="2">
        <h7 class="text-center">
          Verre:
        </h7>
      </b-col>
      <b-col cols="2" class="title">
        <h7 class="text-center">
          Bouteille:
        </h7>
      </b-col>
    </b-row>
    <b-row v-for="vin in vins" :key="vin.id">
      <b-col cols="8">
        {{ vin.fields.vinNom }} <br></br>
        {{ vin.fields.descriptionVin }}
      </b-col>
      <b-col cols="2" class="text-center">
        {{ vin.fields.prixVinVerre }} €
      </b-col>
      <b-col cols="2" class="text-center">
        {{ vin.fields.prixVinBouteille }} €
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  computed: {
    vins () {
      return this.$store.state.vins.vins
    }
  },
  async fetch ({ store }) {
    await store.dispatch('vins/getVins')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/custom.scss';

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.2rem;
}
</style>
