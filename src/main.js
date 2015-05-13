require.config({
  paths: {
    "react": "/static/lib/react/react.min",
    "JSXTransformer": "/static/lib/react/JSXTransformer",
    "jquery": "/static/lib/jquery/jquery-1.11.2.min",
    "routie": "/static/lib/routie/routie.min",
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

require(['app', 'jquery', 'react', 'routie'], function(App) {
  console.log('main.js inited');
});
