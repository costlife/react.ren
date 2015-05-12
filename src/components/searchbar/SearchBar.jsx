define(function(require){
    var React = require('react');
    var SearchBar = React.createClass({
        render: function() {
            return (
                <span className="search-bar">
                    <input className="search-text" placeholder="搜索你感兴趣的"/>
                    <a href="javascript:void(0)" className="search-btn"></a>
                </span>
            );
        }
    });
    return SearchBar;
});
