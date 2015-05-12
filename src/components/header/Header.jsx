define(function(require){
    var React = require('react');
    var SearchBar = require('../searchbar/SearchBar');
    var Header = React.createClass({
        render: function() {
            return (
                <header>
                    <span className="react-logo">
                        <i>React</i>中文社区
                    </span>
                    <SearchBar />
                </header>
            );
        }
    });
    return Header;
});
