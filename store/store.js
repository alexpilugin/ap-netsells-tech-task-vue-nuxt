/* eslint-disable semi */
const devMode = process.env.NODE_ENV === 'development'

// Event names:
export const EVENTS = {
  TOGGLE_DARK_THEME: 'TOGGLE_DARK_THEME',
  SET_THEME: 'SET_THEME',
}

export const state = () => ({
  isDarkTheme: false,
})

export const getters = {
  isDarkThemeInUse: (state) => state.isDarkTheme,
}

export const mutations = {
  [EVENTS.TOGGLE_DARK_THEME]: (state) => {
    state.isDarkTheme = !state.isDarkTheme
    if (devMode) {
      console.log(
        '[TOGGLE_DARK_THEME] mutation: darkTheme: ' + state.isDarkTheme
      )
    }
  },
  [EVENTS.SET_THEME]: (state, mode) => {
    state.isDarkTheme = mode
    if (devMode) {
      console.log('[SET_THEME] mutation: isDarkTheme: ' + state.isDarkTheme)
    }
  },
}

export const actions = {
  toggleDarkTheme: ({ commit }) => {
    if (devMode) {
      console.log('Action: store/toggleDarkTheme')
    }
    commit(EVENTS.TOGGLE_DARK_THEME, null)
  },
  setTheme: ({ commit }, mode) => {
    if (devMode) console.log('Action: store/setTheme')
    commit(EVENTS.SET_THEME, mode)
  },
}
