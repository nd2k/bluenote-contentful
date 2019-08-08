<template>
  <div class="container">
    <h1 class="title">
      bluenote-contentful
    </h1>
    <div v-for="vin in vins" :key="vin.id">
      {{ vin.fields.vinNom }}
      {{ vin.fields.prixVinVerre }}
      {{ vin.fields.descriptionVin }}
    </div>
  </div>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
