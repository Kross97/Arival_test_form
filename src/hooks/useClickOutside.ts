import { useEffect, RefObject } from 'react';

interface IProps {
    ref: RefObject<HTMLDivElement>;
    outsideCb: () => void;
}

export const useClickOutside = ({ ref, outsideCb }: IProps) => {
    useEffect(() => {
        const clickHandler = (event: MouseEvent) => {
            if (event.target instanceof HTMLElement && !ref.current?.contains(event.target)) {
                outsideCb();
            }
        };
        document.addEventListener('click', clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
        };
    }, [ref, outsideCb]);
};
