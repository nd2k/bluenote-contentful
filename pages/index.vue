<template>
  <b-container fluid>
    <section id="suggestion" class="my-3">
      <b-row>
        <h3 class="m-3">
          Nos suggestions:
        </h3>
      </b-row>
      <b-row class="align-items-center">
        <b-col cols="4">
          <div class="title my-3">
            Nos entrées:
          </div>
        </b-col>
        <b-col cols="2">
          <div class="text-center title my-3">
            Prix:
          </div>
        </b-col>
        <b-col cols="4">
          <div class="title my-3">
            Nos vins:
          </div>
        </b-col>
        <b-col cols="2">
          <div class="text-center title my-3">
            Prix:
          </div>
        </b-col>
      </b-row>
      <b-row v-for="(entree, index) in entrees" :key="index">
        <b-col cols="4">
          <div class="text-justify isHidden" :class="{ isShowed: index === activeVin }" @click="toggleClass(index)">
            {{ entree.fields.entree }}
          </div>
        </b-col>
        <b-col cols="2" class="text-center">
          {{ entree.fields.prixEntree }} €
        </b-col>
        <b-col cols="4">
          <div class="text-justify isHidden" :class="{ isShowed: index === activeVin }" @click="toggleClass(index)">
            {{ entree.fields.vin }}
          </div>
        </b-col>
        <b-col cols="2" class="text-center">
          {{ entree.fields.prixVin }} €
        </b-col>
      </b-row>
    </section>
    <hr>
    <section id="vin" class="my-3">
      <b-row>
        <h3 class="m-3">
          Notre carte de vins:
        </h3>
      </b-row>
      <b-row class="align-items-center">
        <b-col cols="8">
          <div class="title">
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
          <div class="my-3">
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
    <hr>
    <section id="partenaire" class="my-3">
      <b-row>
        <h3 class="m-3">
          Nos partenaires:
        </h3>
      </b-row>
      <b-row>
        <b-card-group deck class="mx-auto">
          <b-card
            v-for="(partenaire, index) in partenaires"
            :key="index"
            :title="partenaire.fields.nom"
            :img-src="partenaire.fields.photo.fields.file.url + '?w=1200'"
            img-top
            class="card-img"
          >
            <b-card-text>
              {{ partenaire.fields.nom }}
            </b-card-text>
            <b-card-sub-title>
              {{ partenaire.fields.description }}
            </b-card-sub-title>
            <div slot="footer">
              <b-button href="#" variant="info">
                En savoir plus...
              </b-button>
            </div>
          </b-card>
        </b-card-group>
      </b-row>
    </section>
    <hr>
  </b-container>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <b-navbar-brand href="#">
      <img
        src="../assets/img/logo.jpg"
        alt="Blue Note"
        width="60"
        height="60"
        class="d-inline-block align-top"
      >
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item
          v-scroll-to="'#suggestion'"
          href="#suggestion"
        >
          Suggestions
        </b-nav-item>
        <b-nav-item
          v-scroll-to="'#partenaire'"
          href="#partenaire"
        >
          Partenaires
        </b-nav-item>
        <b-nav-item href="#">
          Réservations
        </b-nav-item>
        <b-nav-item href="#">
          Contact
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
    },
    entrees () {
      return this.$store.state.entrees.entrees
    }
  },
  async fetch ({ store }) {
    await store.dispatch('vins/getVins')
    await store.dispatch('partenaires/getPartenaires')
    await store.dispatch('entrees/getEntrees')
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

.card-img {
  width: 20rem;
}
</style>
