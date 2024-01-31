import React, { InputHTMLAttributes } from 'react';
import classes from './Input.module.scss';
import cn from 'classnames';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    register: UseFormRegister<HTMLInputElement>;
    errorText?: string;
}

export const Input = ({ type, title, placeholder, errorText, name, register }: IProps) => {
    return (
        <label
            className={cn(classes.label, {
                [classes.errorLabel]: !!errorText,
            })}
        >
            <span>{title}</span>
            <input
                className={classes.input}
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
            {errorText && <span className={classes.errorInputText}>{errorText}</span>}
        </label>
    );
};
