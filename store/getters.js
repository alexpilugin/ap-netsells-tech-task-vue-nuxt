// import states from './states.js'

const getters = {
  isDarkThemeInUse: (states) => states.isDarkTheme,
  getConfig: (states) => states.config,
  getEmailRegex: (states) => states.config.validEmailRegExp,
  getNameRegex: (states) => states.config.validName,
  githubRegex: (states) => states.config.githubUserRegex,
}
export default getters
