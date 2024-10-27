import { createStore } from 'vuex'

export interface ILocation {
  lat: number;
  lng: number;
}

export interface RootState {
  selectedPlace: ILocation
}

export default createStore({
  state: {
    selectedPlace: null as ILocation | null,
  },
  getters: {
  },
  mutations: {
    setSelectedPlace(state, place: ILocation) {
      state.selectedPlace = place;
    },
  },
  actions: {
    updateSelectedPlace({ commit }, place: ILocation) {
      commit('setSelectedPlace', place);
    },
  },
  modules: {
  }
})
