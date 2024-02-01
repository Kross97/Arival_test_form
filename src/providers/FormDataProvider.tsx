import React, { FC, useCallback, useMemo, useState } from 'react';
import { usePersistData } from '../hooks/usePersistData';
import { INITIAL_STATE_FORM, STEPS } from '../constants/formDataProvider';
import { IFormDataProvider } from '../types';

export const FormDataProviderContext = React.createContext<{
    state: IFormDataProvider;
    continueHandler: any;
}>({ state: INITIAL_STATE_FORM, continueHandler: null });

const getState = () => {
    const formDataPersist = localStorage.getItem('formData');
    return formDataPersist ? JSON.parse(formDataPersist) : INITIAL_STATE_FORM;
};

export const FormDataProvider: FC<any> = ({ children }) => {
    const [formState, setFormState] = useState<IFormDataProvider>(getState);

    usePersistData<IFormDataProvider>({
        keyPersist: 'formData2',
        persistData: formState,
    });

    const continueHandler = useCallback((partState: Partial<Omit<IFormDataProvider, 'step'>>) => {
        setFormState(prev => ({ ...prev, ...partState, step: STEPS[prev.step] }));
    }, []);

    const providerState = useMemo(
        () => ({ state: formState, continueHandler }),
        [continueHandler, formState]
    );

    return (
        <FormDataProviderContext.Provider value={providerState}>
            {children}
        </FormDataProviderContext.Provider>
    );
};
