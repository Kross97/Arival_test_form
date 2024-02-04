import { useEffect } from 'react';
import { IFormDataProvider } from '../types';

interface IProps {
    keyPersist: string;
    persistData: IFormDataProvider;
    syncCallback: (data: IProps['persistData']) => void;
}

export const useSyncTabsState = ({ keyPersist, persistData, syncCallback }: IProps) => {
    useEffect(() => {
        if (document.visibilityState === 'visible') {
            localStorage.setItem(keyPersist, JSON.stringify(persistData));
        }
    }, [persistData, keyPersist]);

    useEffect(() => {
        const storageCb = () => {
            if (document.visibilityState === 'hidden') {
                const storageState = localStorage.getItem(keyPersist);
                syncCallback(storageState ? JSON.parse(storageState) : persistData);
            }
        };
        window.addEventListener('storage', storageCb);
        return () => {
            window.removeEventListener('storage', storageCb);
        };
    }, [keyPersist, persistData, syncCallback]);
};
