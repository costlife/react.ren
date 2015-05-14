define(function(require){
  var React = require('react');
  var IndexPage = require("pages/IndexPage");
  var SuggestPage = require("pages/SuggestPage");

  routie({
    'index': function(){
      View(<IndexPage />);
    },
    'suggest': function(){
      View(<SuggestPage />);
    },
    '*': function(){
      routie('index');
    },

  });

  function View(page) {
    React.render(page, document.getElementById('appview'));
  }

});
