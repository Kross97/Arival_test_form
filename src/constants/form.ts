import { TFormStatePassword, TKeysFormDataState } from '../types';
import { RegisterOptions, UseFormGetValues } from 'react-hook-form';
import { UseFormTrigger } from 'react-hook-form/dist/types/form';

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

type TValidations = {
    [K in Exclude<TKeysFormDataState, 'password'>]: RegisterOptions;
} & {
    repeatPassword: (getValues: UseFormGetValues<TFormStatePassword>) => {
        validate: (v: string) => true | string;
    };
    password: (
        getValues: UseFormGetValues<TFormStatePassword>,
        trigger: UseFormTrigger<TFormStatePassword>
    ) => RegisterOptions;
};

export const FIELD_VALIDATIONS: TValidations = {
    username: {
        required: { value: true, message: 'Имя должно быть заполнено' },
        pattern: { value: /^[A-ZА-Я]{1,12}$/i, message: 'Имя слишком длинное' },
    },
    email: {
        required: { value: true, message: 'Емейл должен быть заполнен' },
        pattern: { value: emailRegExp, message: 'Емейл введен некоректно' },
    },
    country: { required: { value: true, message: 'Страна должна быть заполнена' } },
    password: (getValues, trigger) => {
        return {
            required: { value: true, message: 'Введите пароль' },
            pattern: { value: /^.{8,16}$/i, message: 'Пароль должен быть от 8 до 16 символов' },
            validate: () => {
                void trigger('repeatPassword');
                return true;
            },
        };
    },
    repeatPassword: getValues => ({
        validate: rPass => {
            console.log('V rPass =>', rPass);
            return getValues('password') === rPass || 'Пароли не совпадают';
        },
    }),
};
