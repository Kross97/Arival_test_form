import React, { InputHTMLAttributes } from 'react';
import classes from './Input.module.scss';
import cn from 'classnames';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { RegisterOptions } from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    register: UseFormRegister<HTMLInputElement>;
    registerValidations?: RegisterOptions;
    errorText?: string;
}

export const Input = ({
    type,
    title,
    placeholder,
    errorText,
    name,
    register,
    registerValidations,
}: IProps) => {
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
                {...register(name, registerValidations)}
            />
            {errorText && <span className={classes.errorInputText}>{errorText}</span>}
        </label>
    );
};
