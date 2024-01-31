import React, { FC, useCallback, useMemo, useState } from 'react';
import { TStep } from '../types';
import { usePersistData } from '../hooks/usePersistData';

interface IFormDataProvider {
    step: TStep;
    username: string;
    email: string;
    country: string;
    password: string;
}

const steps: Record<TStep, TStep> = {
    initial: 'password',
    password: 'review',
    review: 'review',
};

const INITIAL_STATE_FORM: IFormDataProvider = {
    step: 'initial',
    username: '',
    email: '',
    country: '',
    password: '',
};

export const FormDataProviderContext = React.createContext<{
    state: IFormDataProvider;
    continueHandler: any;
}>({ state: INITIAL_STATE_FORM, continueHandler: null });

const getState = () =>
    localStorage.getItem('formData')
        ? JSON.parse(localStorage.getItem('formData'))
        : INITIAL_STATE_FORM;

export const FormDataProvider: FC<any> = ({ children }) => {
    const [formState, setFormState] = useState(getState);

    usePersistData<IFormDataProvider>({
        keyPersist: 'formData2',
        persistData: formState,
    });

    const continueHandler = useCallback((partState: Partial<Omit<IFormDataProvider, 'step'>>) => {
        setFormState(prev => ({ ...prev, ...partState, step: steps[prev.step] }));
    }, []);

    const providerState = useMemo(() => ({ state: formState, continueHandler }), [formState]);

    return (
        <FormDataProviderContext.Provider value={providerState}>
            {children}
        </FormDataProviderContext.Provider>
    );
};
