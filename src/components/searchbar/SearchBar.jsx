define(function(require){
    var React = require('react');
    var SearchBar = React.createClass({
        render: function() {
            return (
                <span className="search-bar">
                    <input placeholder="搜索你感兴趣的"/>
                    <a href="javascript:void(0)" className="search-btn">搜索</a>
                </span>
            );
        }
    });
    return SearchBar;
});
