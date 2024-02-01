import React, { useContext } from 'react';
import { TStep } from '../../types';
import { FormInitial } from './FormInitial';
import { FormPassword } from './FormPassword';
import { FormDataProviderContext } from '../../providers/FormDataProvider';
import { Button } from '../button/Button';
import classes from './Form.module.scss';
import { FormReview } from './FormReview';

const formSteps: Record<TStep, (props: any) => JSX.Element> = {
    initial: FormInitial,
    password: FormPassword,
    review: FormReview,
};

export const Form = () => {
    const {
        state: { step },
        continueHandler,
    } = useContext(FormDataProviderContext);

    const StepForm = formSteps[step];

    return (
        <StepForm continueHandler={continueHandler} className={classes.form}>
            {sss => {
                console.log('ssss', sss);
                return <Button text={'Continue'} type={'submit'} />;
            }}
        </StepForm>
    );
};
