import { INITIAL_STATE_FORM } from '../constants/formDataProvider';

export type TStep = 'initial' | 'password' | 'review';

export type TKeysFormState = keyof typeof INITIAL_STATE_FORM;

export interface IFormDataProvider {
    step: TStep;
    username: string;
    email: string;
    country: ICountry | null;
    password: string;
}

export interface ICountry {
    id: number;
    name: string;
}
