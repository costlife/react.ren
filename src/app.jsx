define(function(require){
  var React = require('react');

  function App() {

    var LoginPage = require("pages/LoginPage");
    this.AppView = React.createClass({
      render: function () {
        return LoginPage;
      }
    });
  }

  App.prototype.init = function () {
    React.render(<this.AppView />, document.body);
  };

  return App;

});
