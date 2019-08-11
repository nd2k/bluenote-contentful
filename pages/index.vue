<template>
  <b-container id="vin" fluid>
    <b-row>
      <h3 class="ml-3">
        Notre carte de vins:
      </h3>
    </b-row>
    <b-row class="align-items-center">
      <b-col cols="8">
        <div class="text-center title">
          Nos vins blancs:
        </div>
      </b-col>
      <b-col cols="2">
        <div class="text-center title">
          Verre:
        </div>
      </b-col>
      <b-col cols="2">
        <div class="text-center title">
          Bouteille:
        </div>
      </b-col>
    </b-row>
    <b-row v-for="vin in vins" :key="vin.id">
      <b-col cols="8">
        <div class="mb-3">
          {{ vin.fields.vinNom }}
        </div>
        <div class="text-justify" :class="{ isShowed }" @click="toggleClass(vin.id)">
          {{ vin.fields.descriptionVin }}
        </div>
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
  data () {
    return {
      isShowed: true
    }
  },
  computed: {
    vins () {
      return this.$store.state.vins.vins
    }
  },
  async fetch ({ store }) {
    await store.dispatch('vins/getVins')
  },
  methods: {
    toggleClass (item) {
      this.isShowed = !this.isShowed(this.item)
    }
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
}

.title {
  font-style: italic;
}

.isShowed {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
