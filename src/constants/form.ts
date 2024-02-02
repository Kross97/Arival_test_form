import { TKeysFormDataState } from '../types';

export const FIELD_VALIDATIONS: Record<string, any> = {
    username: {
        required: { value: true, message: 'error username' },
        pattern: { value: /^[A-ZА-Я]{1,12}$/i, message: 'error length' },
    },
    email: { required: { value: true, message: 'error email' } },
    country: { required: { value: true, message: 'error country' } },
    password: {
        required: { value: true, message: 'erros password' },
        pattern: { value: /^.{8,16}$/i, message: 'error password length' },
    },
};
