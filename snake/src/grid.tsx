import React from 'react';
import Box from './box';

import './style/grid.css'

const root = document.querySelector(':root')!;
const rootStyle = getComputedStyle(root);
let gridSize = parseInt(rootStyle.getPropertyValue('--gridSize'));
gridSize *= gridSize;

const defaultSnakeLength = 5;
const defaultStartIndex = Math.floor(gridSize/2) + defaultSnakeLength;


export const Grid: React.FunctionComponent = () => {

    console.log('Grid rendering', gridSize, defaultStartIndex);

    return (
    <div className={'gridContainer'}>
        {[
            ...Array(gridSize),
            ].map((value: undefined, index: number) => (
                                <Box id={index} key={index} className={index===defaultStartIndex?'snake':'box'}/>
        ))}
    </div>);
}