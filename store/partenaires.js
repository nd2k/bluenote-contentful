import client from '~/plugins/contentful'

export const state = () => ({
  partenaires: []
})

export const mutations = {
  setPartenaires (state, payload) {
    state.partenaires = payload
  }
}

export const actions = {
  async getPartenaires ({ commit }) {
    const response = await client.getEntries({
      content_type: 'partenaire'
    })
    if (response.items.length > 0) {
      commit('setPartenaires', response.items)
      console.log(response.items)
    }
  }
}
