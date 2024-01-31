import React from 'react';
import classes from './StepIndicator.module.scss';
import cn from 'classnames';
import { TStep } from '../../types';

const texts: Record<TStep, string> = {
    initial: 'Initial info',
    password: 'Password screen',
    review: 'Review',
};

const indicatorsColors: Record<TStep, string> = {
    initial: classes.indicatorInitial,
    password: classes.indicatorPassword,
    review: classes.indicatorReview,
};

interface IProps {
    step: TStep;
}

export const StepIndicator = ({ step }: IProps) => (
    <div className={classes.step}>
        <span className={cn(classes.indicator, indicatorsColors[step])} />
        <span>{texts[step]}</span>
    </div>
);
