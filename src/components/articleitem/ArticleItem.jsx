define(function(require){
    var React = require('react');
    var ArticleItem = React.createClass({
        render: function() {
            return (
                <div className='article-item'>

                    <div className='item-left'>
                        <a className='user-head-show'>
                            <img src={this.props.userHead}/>
                        </a>
                        <a className='favour-up'>{this.props.favour}</a>
                        <a className='favour-down'>⬇️</a>
                    </div>
                    <div className='item-right'>
                        <a href={this.props.userLink} className='user-link' target='_blank'>{this.props.userName}</a>
                        <span className='user-action'>{this.props.userAction}</span>
                        <span className='user-time'>{this.props.userTime}</span>
                        <a href={this.props.articleLink} className='article-link' target='_blank'>{this.props.articleTitle}</a>
                    </div>
                </div>
            );
        }
    });
    return ArticleItem;
});
