import * as React from 'react';
import { useState } from 'react';
import { DefaultButton } from '@fluentui/react';
import { Greeting } from './greeting';

interface IButtonProps {
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const LoginButton: React.FunctionComponent<IButtonProps> = (props) => {
    return <DefaultButton onClick={props.onClickHandler} text="Login" />
}

const LogoutButton: React.FunctionComponent<IButtonProps> = (props) => {
    return <DefaultButton onClick={props.onClickHandler} text="Logout" />
}

interface ILoginControlProps {
    initLoginState: boolean
}

export const LoginControl: React.FunctionComponent<ILoginControlProps> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(props.initLoginState);

    const handleLogin = () => {
        console.log("IN handleLogin");
        setIsLoggedIn(!isLoggedIn);
    }

    const handleLogout = () => {
        console.log("IN handleLogout");
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <div>
                {isLoggedIn ? <LogoutButton onClickHandler={handleLogout} /> : <LoginButton onClickHandler={handleLogin} />}
            </div>
            <div>
                <Greeting isLoggedIn={isLoggedIn} welcomeText="Good day!" />
            </div>
        </div >
    );
}