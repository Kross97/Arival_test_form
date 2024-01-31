import React from 'react';
import { Input } from '../input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

export const FormInitial: FC<any> = ({ children, continueHandler, className }) => {
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
                type={'text'}
                title={'Username'}
                placeholder={'Input username'}
                name={'username'}
                register={register}
            />
            <Input
                type={'text'}
                title={'Email'}
                placeholder={'Input email'}
                name={'email'}
                register={register}
            />
            <Input
                type={'text'}
                title={'Country'}
                placeholder={'Select country'}
                name={'country'}
                register={register}
            />
            {children}
        </form>
    );
};
