import * as React from 'react';
import { DefaultButton } from '@fluentui/react';

interface IImageProps {
    src: string;
    alt: string;
}

export class Avatar extends React.Component<IImageProps> {
    handleOnClick() {
        alert("I'm in avatar");
    }

    render() {
        return (
            <>
                <DefaultButton text="Avatar's fluent button" onClick={this.handleOnClick} />
                <img className="Avatar" src={this.props.src} alt={this.props.alt} />
            </>
        );
    }
}