define(function(require){
    var React = require('react');
    var SearchBar = require('../searchbar/SearchBar');
    var Navigation = require('../navigation/Navigation');
    var Header = React.createClass({
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
                            <a>登陆</a>
                            <a>注册</a>
                        </span>
                    </div>
                </header>
            );
        }
    });
    return Header;
});
