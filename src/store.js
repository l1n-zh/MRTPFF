import { createStore } from "vuex"

const state = {
    activated: false,
    zoomLevel: 1
}

const mutations = {
    activate(state, status) {
        state.activated = status
    },
    setZoomLevel(state, value) {
        state.zoomLevel = value
    }
}

export default createStore({
  state,
  mutations
})