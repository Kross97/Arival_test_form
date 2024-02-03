import React, { ButtonHTMLAttributes, useContext } from 'react';
import { IFromStepProps, TStep } from '../../types';
import { FormInitial } from './FormInitial';
import { FormPassword } from './FormPassword';
import { FormDataProviderContext } from '../../providers/FormDataProvider';
import { Button } from '../button/Button';
import classes from './Form.module.scss';
import { FormReview } from './FormReview';

const formSteps: Record<TStep, (props: IFromStepProps) => JSX.Element> = {
    initial: FormInitial,
    password: FormPassword,
    review: FormReview,
};

export const Form = () => {
    const {
        state: { step },
    } = useContext(FormDataProviderContext);

    const StepForm = formSteps[step];

    return (
        <StepForm
            className={classes.form}
            renderAction={(isDisableAction, text = 'Continue', type = 'submit', onClick) => {
                return (
                    <Button onClick={onClick} text={text} type={type} isDisable={isDisableAction} />
                );
            }}
        />
    );
};
