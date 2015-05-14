define(function(require){
    var React = require("react");
    var ArticleItem = require("../articleitem/ArticleItem");
    var ArticleList = React.createClass({
        getInitialState: function() {
            return {
            }
        },
        render: function() {
            return (
                <div>
                    {this.props.data.map(function(result) {
                        return <ArticleItem key={result.id} {...result}/>;
                    })}
                </div>
            );
        }
    });
    return ArticleList;
});
