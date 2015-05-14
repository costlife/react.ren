define(function(require){
    var React = require('react');
    var Header = require('../components/header/Header');
    var Content = require('../components/content/Content');
    var Card = require('../components/card/Card');
    var ArticleList = require('../components/articlelist/ArticleList');
    var card1Style = {
        background: '#fff',
        width: 640,
    }
    var card2Style = {
        background: '#fff',
        width: 640,
        height: 260,
        marginBottom: 10,
    }
    var IndexPage = React.createClass({
        getInitialState: function(){
            return {
                listData: [],
                url: '/test/index.json',
                params: {
                    size: 10,
                    page: 1
                }
            }
        },
        componentDidMount: function() {
            this.bindEvents();
            this.fetch(this.state.params);
        },
        bindEvents: function(){
            $(window).bind("scroll",function() {
                // 判断窗口的滚动条是否接近页面底部，这里的20可以自定义
                if ($(document).scrollTop() + $(window).height() > $(document).height() - 20) {
                      console.log(123);
                }
            })
        },
        fetch: function(params) {
            var me = this;
            var params = params || {};
            function success(resp){
                var resp = JSON.parse(resp);
                var result = me.state.listData.concat(resp.result);
                me.setState({listData:result});
            }
            $.post(this.state.url, params).done(success);
        },
        render: function () {
            return (
                <div>
                    <Header />
                    <Content>
                        <Card style={card2Style} name="热门文章">
                        </Card>
                        <Card style={card1Style} name="最新动态">
                            <ArticleList data={this.state.listData}/>
                        </Card>
                    </Content>
                </div>
            );
        }
    });
    return IndexPage;
});
