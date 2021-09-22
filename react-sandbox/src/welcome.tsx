import * as React from 'react';

// NOTE: when using TS, we need to declare the type of the props being sent to a component, unlike JS.
interface IWelcomeProps {
    name: string;
    style: React.CSSProperties;
}

export class Welcome extends React.Component<IWelcomeProps> {
    render() {
        return <h1 style={this.props.style}>Welcome {this.props.name}</h1>
    }
}
/*
export function Welcome(props: IWelcomeProps) {
    return <h2 style={props.style}>Welcome {props.name}</h2>;
}*/