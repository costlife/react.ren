define(function(require){
    var React = require('react');
    var SearchBar = React.createClass({
        getInitialState: function() {
            return {
                navs:[{
                    name:'首页',
                    href:'/index'
                },{
                    name:'推荐',
                    href:'/suggest'
                },{
                    name:'话题',
                    href:'/topic'
                },{
                    name:'消息',
                    href:'/msg'
                }]
            }
        },
        render: function() {
            return (
                <div className="nav">
                    {this.state.navs.map(function(nav) {
                        return <a className="nav-item" {...nav}>{nav.name}</a>;
                    })}
                </div>
            );
        }
    });
    return SearchBar;
});
