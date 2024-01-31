import { useEffect } from 'react';

interface IProps<T> {
    keyPersist: string;
    persistData: T;
    deps?: unknown[];
}

export const usePersistData = <T>({ keyPersist, persistData, deps = [persistData] }: IProps<T>) => {
    useEffect(() => {
        const persistAuth = () => localStorage.setItem(keyPersist, JSON.stringify(persistData));
        window.addEventListener('beforeunload', persistAuth);
        return () => {
            window.removeEventListener('beforeunload', persistAuth);
        };
    }, [...deps]);
};
