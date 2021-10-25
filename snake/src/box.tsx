import React from 'react';
import './style/box.css';

interface IBoxProps{
    id: number,
    className: string,
}

const Box:React.FunctionComponent<IBoxProps> = (props) => {
    console.log("Box rendering");
    return <div className={props.className} >{props.id}</div>;
};

export default React.memo(Box);