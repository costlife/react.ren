define(function(require){
    var React = require("react");
    var LoginForm = React.createClass({
        getInitialState: function() {
            return {
                username: '',
                password: ''
            }
        },
        componentDidMount: function() {
            this.bindEvents();
        },
        bindEvents: function(){
            $("#login").on('show',this.show);
            $("#login").on('close',this.show);
        },
        focus:function(e){
            var $input = $(e.target).find('input');
            if($input.length == 0){
                $input = $(e.target).parent('span').find('input');
            }
            $input.focus();
        },
        keyPress: function(e){
            if(e.key == "Enter"){
                this.login();
            }
        },
        change: function(e){
            this.setState()
            e.target.value
        },
        login: function(){
        },
        close: function(e){
            $(this.getDOMNode()).css('display','none');
        },
        show: function(){
            $(this.getDOMNode()).css('display','block');
        },
        render: function() {
            return (
                <div id="login">
                    <form className="login-form">
                        <a href="javascript:void(0)" className="close-btn" onClick={this.close}>X</a>
                        <span onClick={this.focus}>
                            <label>邮箱:</label>
                            <input
                                type='text'
                                onKeyPress={this.keyPress}
                                onChange={this.change}
                            />
                        </span>
                        <span onClick={this.focus}>
                            <label>密码:</label>
                            <input
                                type='password'
                                onKeyPress={this.keyPress}
                            />
                        </span>
                        <span>
                            <a className='login-btn' onClick={this.login}>登陆</a>
                        </span>
                    </form>

                    <div className="background"></div>
                </div>
            );
        }
    });
    return LoginForm;
});
