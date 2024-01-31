import React, { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    isDisable?: boolean;
}

export const Button = ({ text, isDisable, type }: IProps) => {
    return (
        <button
            className={cn(classes.btn, {
                [classes.btnDisabled]: !!isDisable,
            })}
            type={type}
        >
            {text}
        </button>
    );
};
