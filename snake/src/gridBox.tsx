import React from 'react';
const boxSide = '50px';

export const GridBox:React.FunctionComponent = () => {
    return (
        <div style={{width: boxSide, height: boxSide, backgroundColor: 'darkgray', borderStyle: 'solid'}} />
    );
};