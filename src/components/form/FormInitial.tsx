import React from 'react';
import { Input } from '../input/Input';
import { useForm } from 'react-hook-form';
import { Select } from '../select/Select';
import { IFormStateStep, IFromStepProps } from '../../types';
import { FIELD_VALIDATIONS } from '../../constants/form';
import { useFormHandler } from '../../hooks/useFormHandler';

type TFieldsInitial = 'username' | 'email' | 'country';

export const FormInitial = ({ renderAction, className }: IFromStepProps) => {
    const { register, handleSubmit, watch, formState } = useForm<IFormStateStep<TFieldsInitial>>();
    const currentCountry = watch('country');

    const { isDisableAction, onSubmit } = useFormHandler<IFormStateStep<TFieldsInitial>>({
        watch,
        errors: formState.errors,
    });

    return (
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
            <Input
                type={'text'}
                title={'Username'}
                placeholder={'Input username'}
                name={'username'}
                errorText={formState.errors.username?.message}
                register={register}
                registerValidations={FIELD_VALIDATIONS['username']}
            />
            <Input
                type={'text'}
                title={'Email'}
                placeholder={'Input email'}
                name={'email'}
                errorText={formState.errors.email?.message}
                register={register}
                registerValidations={FIELD_VALIDATIONS['email']}
            />
            <Select
                currentCountry={currentCountry}
                register={register}
                title={'Country'}
                placeholder={'Select country'}
                registerValidations={FIELD_VALIDATIONS['country']}
                errorText={formState.errors.country?.message}
            />
            {renderAction(!!isDisableAction)}
        </form>
    );
};
