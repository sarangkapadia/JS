import * as React from 'react';

type IToggleButtonProps = { color: string };
type IToggleButtonState = { isON: boolean, color: string };

export class ToggleButton extends React.Component<IToggleButtonProps, IToggleButtonState> {
    constructor(props: IToggleButtonProps) {
        super(props);

        // this.handleOnClick = this.handleOnClick.bind(this);

        this.state = {
            isON: false,
            color: this.props.color,
        }
    }

    handleOnClick(text: string) {
        alert(text);
        const newColor = this.state.color === 'red' ? 'blue' : 'red';
        console.log(newColor);
        this.setState({
            isON: !this.state.isON,
            color: newColor,

        }
        );
    }


    render() {
        const str = "hello button";
        return (
            <p>
                <button style={{ color: this.state.color }} onClick={this.handleOnClick.bind(this, str)}>
                    {this.state.isON ? "ON" : "OFF"}
                </button>
            </p >
        )
    }
}