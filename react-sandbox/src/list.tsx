import * as React from 'react';
import {useState, useEffect} from 'react';

interface IListProps{
    initVal: number;
}

export const List:React.FunctionComponent<IListProps> = (props) => {
    const initValues:number[] = [props.initVal, props.initVal+1, props.initVal+2];
    let e:JSX.Element[] = [<></>];
    const [numList, setNumList] = useState(initValues);
    const [element, setElement] = useState(e);

    const handleOnPlus = () => {
        let tempList = numList;
        // tempList.forEach(element => {
        //     element+=element;
        // });
        tempList[0] = tempList[0]+1;
        tempList[1] = tempList[1]+1;
        tempList[2] = tempList[2]+1;
        
        setNumList(tempList);
        console.log(numList, tempList);
        let element = numList.map(val => <li>{val}</li>);
        setElement(element);
    };

    const handleOnMinus = () => {
        let tempList = numList;
        // tempList.forEach(element => {
        //     element-=element;
        // });

        tempList[0] = tempList[0]-1;
        tempList[1] = tempList[1]-1;
        tempList[2] = tempList[2]-1;
        setNumList(tempList);
        console.log(numList, tempList);
        let element = numList.map(val => <li>{val}</li>);
        setElement(element);
    };

    useEffect(() => {
        console.log("In useEffect");
    },[...numList]);

    return (
        <div>
            <button onClick={handleOnPlus}>{'+'}</button>
            <button onClick={handleOnMinus}>{'-'}</button>
            {element}
        </div>
    );

}