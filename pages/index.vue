<template>
  <b-container fluid>
    <section id="vin" class="my-3">
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
      <b-row v-for="(vin, index) in vins" :key="index">
        <b-col cols="8">
          <div class="mb-3">
            {{ vin.fields.vinNom }}
          </div>
          <div class="text-justify isHidden" :class="{ isShowed: index === activeVin }" @click="toggleClass(index)">
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
    </section>
    <section id="partenaire" class="my-3">
      <b-row>
        <h3 class="ml-3">
          Nos partenaires:
        </h3>
      </b-row>
      <b-row v-for="(partenaire, index) in partenaires" :key="index">
        <b-col cols="8">
          <div class="mb-3">
            {{ partenaire.fields.type }} : {{ partenaire.fields.nom }}
          </div>
          <div class="text-justify">
            {{ partenaire.fields.description }}
          </div>
        </b-col>
        <b-col cols="4">
          <b-img :src="partenaire.fields.photo.fields.file.url" fluid />
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>

export default {
  data () {
    return {
      isHidden: true,
      activeVin: null
    }
  },
  computed: {
    vins () {
      return this.$store.state.vins.vins
    },
    partenaires () {
      return this.$store.state.partenaires.partenaires
    }
  },
  async fetch ({ store }) {
    await store.dispatch('vins/getVins')
    await store.dispatch('partenaires/getPartenaires')
  },
  methods: {
    toggleClass (index) {
      this.activeVin = index
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

.isHidden {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.isShowed {
  white-space: normal;
  overflow: visible;
}
</style>
