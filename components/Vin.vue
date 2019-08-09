<template>
  <b-container>
    <b-row no-gutters>
      <section id="vin">
        <h3>Notre carte de vins:</h3>
        <b-row>
          <b-col cols="8">
            <h5 class="text-center">
              Nos vins blancs:
            </h5>
          </b-col>
          <b-col cols="2">
            <h5 class="text-center">
              Prix au verre:
            </h5>
          </b-col>
          <b-col cols="2">
            <h5 class="text-center">
              Prix à la bouteille:
            </h5>
          </b-col>
        </b-row>
        <b-row v-for="vin in vins" :key="vin.id">
          <b-col cols="8">
            {{ vin.fields.vinNom }} <br></br>
            {{ vin.fields.descriptionVin }}
          </b-col>
          <b-col cols="2">
            {{ vin.fields.prixVinVerre }} €
          </b-col>
          <b-col cols="2">
            {{ vin.fields.prixVinBouteille }} €
          </b-col>
        </b-row>
      </section>
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

</style>
