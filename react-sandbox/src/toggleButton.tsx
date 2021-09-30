import * as React from 'react';
import { useState } from 'react';

type IToggleButtonProps = { color: string };

export const ToggleButton: React.FunctionComponent<IToggleButtonProps> = (props) => {
    const [isON, setIsON] = useState(false);
    const [color, setColor] = useState(props.color);

    const handleOnClick = () => {
        setIsON(!isON);

        const newColor = color === 'red' ? 'blue' : 'red';
        setColor(newColor);
    };

    return (
        <p>
            <button style={{ color: color }} onClick={handleOnClick}>
                {isON ? "ON" : "OFF"}
            </button>
        </p >
    );
}