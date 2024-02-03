import { Input } from '../input/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IFromStepProps, TFormStatePassword } from '../../types';
import { useFormHandler } from '../../hooks/useFormHandler';
import { FIELD_VALIDATIONS } from '../../constants/form';

export const FormPassword = ({ renderAction, className }: IFromStepProps) => {
    const { register, handleSubmit, watch, formState, getValues, trigger } =
        useForm<TFormStatePassword>({
            values: { password: '', repeatPassword: '' },
        });

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
                registerValidations={FIELD_VALIDATIONS['password'](getValues, trigger)}
                errorText={formState.errors.password?.message}
            />
            <Input
                type={'password'}
                title={'Repeat passport'}
                placeholder={'Repeat password'}
                name={'repeatPassword'}
                register={register}
                registerValidations={FIELD_VALIDATIONS['repeatPassword'](getValues)}
                errorText={formState.errors.repeatPassword?.message}
            />
            {renderAction(isDisableAction)}
        </form>
    );
};
