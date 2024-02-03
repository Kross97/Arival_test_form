import { useEffect } from 'react';

interface IProps {
    ref: React.RefObject<HTMLDivElement>;
    outsideCb: () => void;
}

export const useClickOutside = ({ ref, outsideCb }: IProps) => {
    useEffect(() => {
        const clickHandler = (event: MouseEvent) => {
            console.log(
                'event =>',
                event,
                's',
                event.target instanceof HTMLElement && !ref.current?.contains(event.target)
            );
            if (event.target instanceof HTMLElement && !ref.current?.contains(event.target)) {
                outsideCb();
            }
        };
        document.addEventListener('click', clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
        };
    }, []);
};
