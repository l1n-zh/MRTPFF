import { createStore } from "vuex"

const state = {
    activated: false,
    zoomLevel: 1,
    favorites: new Set()
}

const mutations = {
    activate(state, status) {
        state.activated = status
    },
    setZoomLevel(state, value) {
        state.zoomLevel = value
    },
    addToFavorites(state, station) {
        state.favorites.add(station)
    },
    removeFromFavorites(state, station) {
        state.favorites.delete(station)
    }
}

export default createStore({
  state,
  mutations
})