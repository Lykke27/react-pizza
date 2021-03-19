import React from "react";
import classNames from 'classnames';

type PropsType = {
    children: string
    outline?: boolean
}

export const Button = (props: PropsType) => {
    return (
        <button className={classNames('button', {
            'button--outline': props.outline
        })}> {props.children} </button>
    )
}
