<template>
  <b-container>
    <h3>Nos suggestions:</h3>
    <b-row>
      <b-col>
        <h5 class="text-center">
          Nos entrées:
        </h5>
        <div v-for="entreeSuggestion in entreeSuggestions" :key="entreeSuggestion.id">
          {{ entreeSuggestion.fields.entree }}
        </div>
      </b-col>
      <b-col>
        <h5 class="text-center">
          Nos vins:
        </h5>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// export default {
//   computed: {
//     suggestionsEntree () {
//       console.log(this.$store.state.suggestionsEntree.suggestionsEntree)
//       return this.$store.state.suggestionsEntree.suggestionsEntree
//     }
//   },
//   async fetch ({ store }) {
//     await store.dispatch('suggestions/getSuggestionsEntree')
//   }
// }
</script>

<style>

</style>
