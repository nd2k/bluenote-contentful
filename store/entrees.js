import client from '~/plugins/contentful'

export const state = () => ({
  entrees: []
})

export const mutations = {
  setEntrees (state, payload) {
    state.entrees = payload
  }
}

export const actions = {
  async getEntrees ({ commit }) {
    const response = await client.getEntries({
      content_type: 'suggestionsEntrees'
    })
    if (response.items.length > 0) {
      commit('setEntrees', response.items)
    }
  }
}
