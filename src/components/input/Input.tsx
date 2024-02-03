import React, { InputHTMLAttributes } from 'react';
import classes from './Input.module.scss';
import cn from 'classnames';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { RegisterOptions } from 'react-hook-form';
import { TKeysFormDataState } from '../../types';
import { ErrorText } from '../form/ErrorText';

interface IProps<T> extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    name: TKeysFormDataState | 'repeatPassword';
    register: T;
    registerValidations?: RegisterOptions;
    errorText?: string;
}

export const Input = <T extends UseFormRegister<any>>({
    type,
    title,
    placeholder,
    errorText,
    name,
    register,
    registerValidations,
}: IProps<T>) => {
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
            <ErrorText errorText={errorText} />
        </label>
    );
};
