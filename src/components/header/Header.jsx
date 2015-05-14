define(function(require){
    var React = require('react');
    var SearchBar = require('../searchbar/SearchBar');
    var Navigation = require('../navigation/Navigation');
    var LoginForm = require('../login/LoginForm');
    var Header = React.createClass({
        getInitialState: function(){
            return {
            }
        },
        login:function(){
            $("#login").trigger('show');
        },
        render: function() {
            return (
                <header className="react-header">
                    <div className="header-zone">
                        <span className="react-logo">
                            <i>React</i>中文社区
                        </span>
                        <SearchBar />
                        <Navigation />
                        <span className="signin">
                            <a href="javascript:void(0)" onClick={this.login}>登陆</a>
                            <a>注册</a>
                        </span>
                    </div>
                    <LoginForm />
                </header>
            );
        }
    });
    return Header;
});
