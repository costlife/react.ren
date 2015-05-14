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
                <div className='article-list'>
                    {this.props.data.map(function(result) {
                        //should add key={result.id} as an attr in ArticleItem
                        return <ArticleItem  {...result}/>;
                    })}
                </div>
            );
        }
    });
    return ArticleList;
});
