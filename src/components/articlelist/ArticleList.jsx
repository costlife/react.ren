define(function(require){
    var React = require("react");
    var ArticleItem = require("../articleitem/ArticleItem");
    var ArticleList = React.createClass({
        getInitialState: function() {
            return {
                results:[]
            }
        },
        componentDidMount: function() {
            var me = this;
            var params = {};
            function success(resp){
                resp = JSON.parse(resp);
                me.setState({results:resp.result})
            }
            $.post(this.props.source, params).done(success);
        },
        render: function() {
            return (
                <div>
                    {this.state.results.map(function(result) {
                        return <ArticleItem {...result}/>;
                    })}
                </div>
            );
        }
    });
    return ArticleList;
})
