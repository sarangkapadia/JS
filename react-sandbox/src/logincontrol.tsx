import * as React from 'react';
import { DefaultButton } from '@fluentui/react';
import { Greeting } from './greeting';

interface IButtonProps {
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

function LoginButton(props: IButtonProps) {
    return <DefaultButton onClick={props.onClickHandler} text="Login" />
}

function LogoutButton(props: IButtonProps) {
    return <DefaultButton onClick={props.onClickHandler} text="Logout" />
}

interface ILoginControlProps {
    initLoginState: boolean
}

interface ILoginControlState {
    isLoggedIn: boolean
}

export class LoginControl extends React.Component<ILoginControlProps, ILoginControlState> {
    constructor(props: ILoginControlProps) {
        super(props);
        this.state = { isLoggedIn: this.props.initLoginState }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        console.log("IN handleLogin");
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
        });
    }

    handleLogout() {
        console.log("IN handleLogout");
        this.setState({
            isLoggedIn: false,
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.isLoggedIn ? <LogoutButton onClickHandler={this.handleLogout} /> : <LoginButton onClickHandler={this.handleLogin} />}
                </div>
                <div>
                    <Greeting isLoggedIn={this.state.isLoggedIn} welcomeText="Good day!" />
                </div>
            </div >
        );
    }
}