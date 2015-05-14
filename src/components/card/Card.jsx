define(function(require){
    var React = require('react');
    var Card = React.createClass({
        render: function() {
            return (
                <div className="card" style={this.props.style}>
                    <div className="name">{this.props.name}</div>
                    {this.props.children}
                </div>
            );
        }
    });
    return Card;
});
