import React, { FC, useContext } from 'react';
import { TStep } from '../../types';
import { FormInitial } from './FormInitial';
import { FormPassword } from './FormPassword';
import { FormDataProviderContext } from '../../providers/FormDataProvider';
import { Button } from '../button/Button';
import classes from './Form.module.scss';

const formSteps: Record<TStep, (props: any) => JSX.Element> = {
    initial: FormInitial,
    password: FormPassword,
    review: FormPassword,
};

export const Form = () => {
    const {
        state: { step },
        continueHandler,
    } = useContext(FormDataProviderContext);

    const StepForm = formSteps[step];

    return (
        <StepForm continueHandler={continueHandler} className={classes.form}>
            <Button text={'Continue'} type={'submit'} />
        </StepForm>
    );
};
