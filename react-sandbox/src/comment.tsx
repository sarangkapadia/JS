import * as React from 'react';
import { Avatar } from './avatar';
import { UserInfo } from './userinfo';

interface ICommentProps {
    author: { avatarUrl: string, name: string };
    text: string
}

export function Comment(props: ICommentProps) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar src={props.author.avatarUrl} alt={props.author.name} />
                <UserInfo name={props.author.name} />
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            {/* <div className="Comment-date">
                {formatDate(props.date)}
            </div> */}
        </div>
    );
}
