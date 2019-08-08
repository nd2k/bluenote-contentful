import client from '~/plugins/contentful'

export const state = () => ({
  vins: []
})

export const mutations = {
  setVins (state, payload) {
    state.vins = payload
  }
}

export const actions = {
  async getVins ({ commit }) {
    const response = await client.getEntries({
      content_type: 'vin'
    })
    if (response.items.length > 0) {
      commit('setVins', response.items)
      console.log(response.items)
    }
  }
}
