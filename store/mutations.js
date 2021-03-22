import { TOGGLE_DARK_THEME, SET_THEME } from './mutation-types.js'

const devMode = process.env.NODE_ENV === 'development'

const mutations = {
  [TOGGLE_DARK_THEME]: (state) => {
    state.isDarkTheme = !state.isDarkTheme
    if (devMode) {
      console.log(
        '[TOGGLE_DARK_THEME] mutation: darkTheme: ' + state.isDarkTheme
      )
    }
  },
  [SET_THEME]: (state, mode) => {
    state.isDarkTheme = mode
    if (devMode) {
      console.log('[SET_THEME] mutation: isDarkTheme: ' + state.isDarkTheme)
    }
  },
}
export default mutations
