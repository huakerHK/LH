module.exports = {
  // "presets": [
  //   ["es2015", { "modules": false }]
  // ],
  'presets': [
    '@vue/app'
  ],
  'plugins':[
    [
      "component",
      {
        "libraryName":"element-ui",
        "styleLibraryName":"theme-chalk"
      }
    ]
  ]
}
