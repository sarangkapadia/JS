import * as React from 'react';
import { UserGreeting } from './usergreeting';
import { GuestGreeting } from './guestgreeting';

interface IGreetingProps {
    isLoggedIn: boolean,
    welcomeText: string;
}

export function Greeting(props: IGreetingProps) {
    return (
        <div>
            { props.welcomeText}
            < div >
                {props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
            </div >
        </div>
    )
}