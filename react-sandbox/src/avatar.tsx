import * as React from 'react';
import { DefaultButton } from '@fluentui/react';
import { FormEvent } from 'react';

interface IImageProps {
    src: string;
    alt: string;
}

export class Avatar extends React.Component<IImageProps> {
    handleOnSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault(); //not working?!
        alert("I'm in avatar");
    }

    render() {
        return (
            <>
            <form onSubmit={(e)=>this.handleOnSubmit(e)}>
                <DefaultButton type="submit" text="Avatar's fluent button" />
            </form>
                <img className="Avatar" src={this.props.src} alt={this.props.alt} />
            </>
        );
    }
}