import React from 'react';

export interface IScoreProps{
    currentScore:number;
}
export const Score: React.FunctionComponent<IScoreProps> = (props) => {
    console.log("Score rendering");
    return <h2>Score: {props.currentScore}</h2>
}