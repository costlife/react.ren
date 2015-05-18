require.config({
  paths: {
    "react": "/static/lib/react/react",
    "JSXTransformer": "/static/lib/react/JSXTransformer",
    "jquery": "/static/lib/jquery/dist/jquery",
    "routie": "/static/lib/routie/dist/routie",
  },

  shim: {
    "react": {
      "exports": "React"
    },
    "JSXTransformer": "JSXTransformer",
    "jquery": {
      "exports": "$"
    },
  }
});

require(['jquery', 'app', 'react', 'routie'], function(App) {
  //console.log('main.js inited');
});
