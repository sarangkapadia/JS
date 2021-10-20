import React from 'react';
import {GridBox} from './gridBox';

export interface IGridProps{
    size: number;    // number of row,col in the snake canvas
};

export const Grid: React.FunctionComponent<IGridProps> = (props) => {
    return (
    <div style={{display:'flex', width: '500px'}}>
        <GridBox />
        <GridBox />
        <GridBox />
        <GridBox />
        <GridBox />
        <GridBox />
        <GridBox />
        <GridBox />
        
    </div>);
}