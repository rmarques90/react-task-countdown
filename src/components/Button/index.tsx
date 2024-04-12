import React from 'react';
import style from  './button.module.scss';

class Button extends React.Component<{
    text: String,
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void
}> {
    render() {
        return (
            <button onClick={this.props.onClick} type={this.props.type} className={style.button}>
                {this.props.text}
            </button>);
    }
}

export default Button;