import React from "react";
import classes from './Button.module.scss';
import cn from 'classnames';

interface IProps {
    text: string;
    isDisable?: boolean;
}

export const Button = ({ text, isDisable }: IProps) => {
    return <button className={cn(classes.btn, {
        [classes.btnDisabled]: !!isDisable
    })} type={'button'}>{text}</button>
};