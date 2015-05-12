define(function(require){
    var React = require('react');
    var ArticleItem = React.createClass({
        render: function() {
            return (
                <div>
                    <a className='user-head-show'>
                        <img src={this.props.userHead}/>
                    </a>
                    <div className='favour'>
                        <a className='favour-up'>{this.props.favour}</a>
                        <a className='favour-down'>⬇️</a>
                    </div>
                    <div className='source'>
                        <a href={this.props.userLink} className='user-link' target='_blank'>{this.props.userName}</a>
                        <span className='user-action'>{this.props.userAction}</span>
                        <span className='user-time'>{this.props.userTime}</span>
                    </div>
                    <div className='article'>
                        <a href={this.props.articleLink} className='article-link' target='_blank'>{this.props.articleTitle}</a>
                    </div>
                </div>
            );
        }
    });
    return ArticleItem;
})
