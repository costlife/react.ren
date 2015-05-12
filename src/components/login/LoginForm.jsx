define(function(require){
    var React = require("react");
    var LoginForm = React.createClass({
        getInitialState: function() {
            return {
                username: '',
                password: ''
            }
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
        render: function() {
            return (
                <form className='login-form'>
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
            );
        }
    });
    return LoginForm;
})
