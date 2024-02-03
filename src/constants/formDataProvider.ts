import { IFormDataProvider, TStep } from '../types';

export const STEPS: Record<TStep, TStep> = {
    initial: 'password',
    password: 'review',
    review: 'review',
};

export const INITIAL_STATE_FORM: IFormDataProvider = {
    step: 'initial',
    username: '',
    email: '',
    country: null,
    password: '',
};

export const STORAGE_KEY = 'formData';
