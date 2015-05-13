define(function(require){
  var React = require('react');
  var page_index = require("pages/IndexPage");
  var page_suggest = require("pages/SuggestPage");

  routie({
    '': function(){
      View(page_index);
    },
    '/suggest': function(){
      View(page_suggest);
    },
    '*': function(){
      routie('');
    }
  });

  function View(page) {
    this.AppView = React.createClass({
      render: function () {
        return page;
      }
    });
    React.render(<this.AppView />, document.getElementById('content'));
  }

});
