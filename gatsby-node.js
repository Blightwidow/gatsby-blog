const path = require('path');

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "$data": path.resolve(__dirname, "src/data"),
        "$models": path.resolve(__dirname, "src/data/model"),
        "$ui": path.resolve(__dirname, "src/ui"),
        "$components": path.resolve(__dirname, "src/ui/components"),
        "$medias": path.resolve(__dirname, "src/ui/medias"),
      },
    },
  })
}
