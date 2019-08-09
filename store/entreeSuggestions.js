import client from '~/plugins/contentful'

export const state = () => ({
  entreeSuggestions: []
})

export const mutations = {
  setEntreeSuggestion (state, payload) {
    state.entreeSuggestions = payload
  }
}

export const actions = {
  async getEntreeSuggestions ({ commit }) {
    const response = await client.getEntries({
      content_type: 'entreeSuggestion'
    })
    if (response.items.length > 0) {
      commit('setEntreeSuggestions', response.items)
      console.log(response.items)
    }
  }
}
