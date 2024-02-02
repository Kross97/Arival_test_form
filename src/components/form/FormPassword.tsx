import { Input } from '../input/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormStateStep, IFromStepProps } from '../../types';
import { useFormHandler } from '../../hooks/useFormHandler';
import { FIELD_VALIDATIONS } from '../../constants/form';

type TFormStatePassword = IFormStateStep<'password'> & { repeatPassword: string };

export const FormPassword = ({ renderAction, className }: IFromStepProps) => {
    const { register, handleSubmit, watch, formState } = useForm<TFormStatePassword>();

    const { isDisableAction, onSubmit } = useFormHandler<TFormStatePassword>({
        watch,
        errors: formState.errors,
    });

    return (
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
            <Input
                type={'password'}
                title={'Password'}
                placeholder={'Input password'}
                name={'password'}
                register={register}
                registerValidations={FIELD_VALIDATIONS['password']}
                errorText={formState.errors.password?.message}
            />
            <Input
                type={'text'}
                title={'Repeat passport'}
                placeholder={'Repeat password'}
                name={'repeatPassword'}
                register={register}
            />
            {renderAction(isDisableAction)}
        </form>
    );
};
