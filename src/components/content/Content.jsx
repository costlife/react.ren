define(function(require){
    var React = require('react');
    var Content = React.createClass({
        render: function() {
            return (
                <div id="content" className="content">
                    {this.props.children}
                </div>
            )
        }
    });
    return Content;
});
