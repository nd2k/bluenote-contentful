<template>
  <div class="container">
    <h1>
      bluenote-contentful
    </h1>
    <!-- <div v-for="vin in vins" :key="vin.id">
      {{ vin.fields.vinNom }}
      {{ vin.fields.prixVinVerre }}
      {{ vin.fields.descriptionVin }}
    </div> -->
  </div>
</template>

<script>

export default {
//   computed: {
//     vins () {
//       return this.$store.state.vins.vins
//     }
//   },
//   async fetch ({ store }) {
//     await store.dispatch('vins/getVins')
//   }
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
}
</style>
