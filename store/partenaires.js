import client from '~/plugins/contentful'

export const state = () => ({
  partenaires: []
  // image: {}
})

export const mutations = {
  setPartenaires (state, payload) {
    state.partenaires = payload
  }
  // setImage (state, payload) {
  //   state.images = payload
  // }
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
  // async getImages ({ commit }) {
  //   const images = await client.getEntries({
  //     content_type: 'partenaire'
  //   }).then(function (entries) {
  //     entries.items.forEach(function (entry) {
  //       if (entry.fields) {
  //         const imageURL = 'https://' + entry.fields.photo.fields.file.url
  //         console.log(imageURL)
  //       }
  //     })
  //   })
  //   console.log(images)
  // }
}
