const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        services: path.resolve(__dirname, 'src/services'),
        layout: path.resolve(__dirname, 'src/layout'),
        templates: path.resolve(__dirname, 'src/templates'),
        styles: path.resolve(__dirname, 'src/styles'),
        img: path.resolve(__dirname, 'src/images'),
        data: path.resolve(__dirname, 'src/data'),
      },
    },
  });
};
