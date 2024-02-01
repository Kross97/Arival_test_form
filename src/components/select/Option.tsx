import React from 'react';
import classes from './Option.module.scss';
import cn from 'classnames';

interface IProps {
    isChecked: boolean;
    text: string;
    onClick: () => void;
}

export const Option = ({ text, isChecked, onClick }: IProps) => {
    return (
        <div
            onClick={onClick}
            className={cn(classes.option, {
                [classes.optionChecked]: isChecked,
            })}
        >
            {text}
        </div>
    );
};
