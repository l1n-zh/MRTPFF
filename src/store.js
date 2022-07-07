import { createStore } from "vuex"

const state = {
    activated: false,
    zoomLevel: 1,
    favorites: new Set(["明德", "忠孝新生", "南港軟體園區", "市政府", "台北小巨蛋", "新北產業園區"])
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