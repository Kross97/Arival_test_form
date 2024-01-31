import { Input } from '../input/Input';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const FormPassword = ({ children, continueHandler, className }: any) => {
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm<any>();

    const onSubmit: SubmitHandler<any> = data => {
        console.log(data);
        continueHandler(data);
    };
    return (
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
            <Input
                type={'password'}
                title={'Password'}
                placeholder={'Input password'}
                name={'password'}
                register={register}
            />
            <Input
                type={'text'}
                title={'Repeat passport'}
                placeholder={'Repeat password'}
                name={'repeatPassword'}
                register={register}
            />
            {children}
        </form>
    );
};
