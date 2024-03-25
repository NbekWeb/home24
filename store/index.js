export const state = () => ({
    log: false,
    catalog: false,
  })
  
  export const getters = {
    getLog(state) {
      return state.log
    }
  }

  export const mutations = {
    toggleCatalog(state) {
      state.catalog=!state.catalog
    },
    toggleLog(state) {
      state.log=!state.log
    }
  }