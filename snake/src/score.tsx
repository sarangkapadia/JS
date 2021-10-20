import React from 'react';

export interface IScoreProps{
    currentScore:number;
}
export const Score: React.FunctionComponent<IScoreProps> = (props) => {
    return <div>
        <h2>Score: {props.currentScore}</h2>
    </div>
}