import React, { PropsWithChildren } from 'react';
import { Input } from '../input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Select } from '../select/Select';

export const FormInitial = ({
    children,
    continueHandler,
    className,
}: PropsWithChildren<{ className: string; continueHandler: any }>) => {
    const { register, handleSubmit, watch } = useForm<any>();
    const currentCountry = watch('country');

    const onSubmit: SubmitHandler<any> = data => {
        console.log(data);
        continueHandler(data);
    };

    return (
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
            <Input
                type={'text'}
                title={'Username'}
                placeholder={'Input username'}
                name={'username'}
                register={register}
                registerValidations={{ required: true, pattern: /^[A-ZА-Я]{1,12}$/i }}
            />
            <Input
                type={'text'}
                title={'Email'}
                placeholder={'Input email'}
                name={'email'}
                register={register}
                registerValidations={{ required: true }}
            />
            <Select
                currentCountry={currentCountry}
                register={register}
                title={'Country'}
                placeholder={'Select country'}
            />
            {children(true)}
        </form>
    );
};
