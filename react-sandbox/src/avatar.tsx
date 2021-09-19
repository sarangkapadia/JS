import * as React from 'react';

interface IImageProps {
    src: string;
    alt: string;
}

export class Avatar extends React.Component<IImageProps> {
    render() {
        return <img className="Avatar" src={this.props.src} alt={this.props.alt} />
    }
}