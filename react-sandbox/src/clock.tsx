import * as React from 'react';
import { clearInterval } from 'timers';

type clockProps = any;
type clockState = { timeStamp: string };

export class Clock extends React.Component<clockProps, clockState> {
    timerID!: NodeJS.Timeout;

    constructor(props: clockProps) {
        super(props);
        const timeStamp = new Date().toLocaleTimeString();
        this.state = {
            timeStamp: timeStamp,
        }

    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            const timeStamp = new Date().toLocaleTimeString();
            this.setState({
                timeStamp: timeStamp,
            })
        }, 1000);
    }

    componentDidUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <p>
                {this.state.timeStamp}
            </p>
        );
    }
}