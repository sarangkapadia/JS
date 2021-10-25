import React from 'react';
import './style/button.css';

export const Button:React.FunctionComponent = () => {
    console.log("Button rendering");
    return <button className={'newGame'}>{'New Game'}</button>;
}