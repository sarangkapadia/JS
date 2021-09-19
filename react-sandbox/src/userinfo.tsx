import * as React from 'react';


export function UserInfo(props: { name: string }) {
    return (
        <div className="UserInfo">
            {props.name}
        </div>
    );
}