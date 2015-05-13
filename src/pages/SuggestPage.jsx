define(function(require){
    var React = require('react');
    var LoginForm = require('../components/login/LoginForm');
    var ArticleList = require('../components/articlelist/ArticleList');
    var Header = require('../components/header/Header');
    return (
        <div>
            <Header />
            <ArticleList source="/test/suggest.json"/>
            <LoginForm/>
        </div>
    );
})
