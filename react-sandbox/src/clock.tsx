import * as React from 'react';
import { useState, useEffect } from 'react';
import { clearInterval } from 'timers';

type clockProps = any;

export const Clock: React.FunctionComponent<clockProps> = (props) => {
    const [timeStamp, setTimeStamp] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        let timerID = setInterval(() => {
            const timeStamp = new Date().toLocaleTimeString();
            setTimeStamp(timeStamp);
            return () => {
                clearInterval(timerID);
            };
        }, 1000);
    });

    return (
        <p>
            {timeStamp}
        </p>
    );

}