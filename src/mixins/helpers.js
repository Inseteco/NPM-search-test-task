export default {
  methods: {
    openExternal(link) {
      // Why window.open and not just "<a href" ? 
      // Coz we can be in different envourment (mobile webview / electron / tauri / SSR etc)
      // and each of them will have own realization of external link opening
      if (link) window.open(link, '_blank').focus()
    }
  },
}