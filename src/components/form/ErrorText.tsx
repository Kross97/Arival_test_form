import React from 'react';
import classes from './ErrorText.module.scss';

interface IProps {
    errorText?: string;
}

export const ErrorText = ({ errorText }: IProps) => {
    return errorText ? <span className={classes.errorInputText}>{errorText}</span> : <></>;
};
