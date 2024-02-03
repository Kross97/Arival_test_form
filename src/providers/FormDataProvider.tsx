import React, { FC, useCallback, useMemo, useState } from 'react';
import { INITIAL_STATE_FORM, STEPS, STORAGE_KEY } from '../constants/formDataProvider';
import { IFormDataProvider, TContinueHandler } from '../types';
import { useSyncTabsState } from '../hooks/useSyncTabsState';

export const FormDataProviderContext = React.createContext<{
    state: IFormDataProvider;
    continueHandler: TContinueHandler;
    resetHandler: () => void;
}>({ state: INITIAL_STATE_FORM, continueHandler: () => {}, resetHandler: () => {} });

const getState = () => {
    const formDataPersist = localStorage.getItem(STORAGE_KEY);
    return formDataPersist ? JSON.parse(formDataPersist) : INITIAL_STATE_FORM;
};

export const FormDataProvider: FC<any> = ({ children }) => {
    const [formState, setFormState] = useState<IFormDataProvider>(getState);

    useSyncTabsState({
        keyPersist: STORAGE_KEY,
        persistData: formState,
        syncCallback: storageState => setFormState(storageState),
    });

    const continueHandler = useCallback((partState: Partial<Omit<IFormDataProvider, 'step'>>) => {
        setFormState(prev => ({ ...prev, ...partState, step: STEPS[prev.step] }));
    }, []);

    const resetHandler = useCallback(() => {
        setFormState(INITIAL_STATE_FORM);
    }, []);

    const providerState = useMemo(
        () => ({ state: formState, continueHandler, resetHandler }),
        [continueHandler, formState, resetHandler]
    );

    return (
        <FormDataProviderContext.Provider value={providerState}>
            {children}
        </FormDataProviderContext.Provider>
    );
};
