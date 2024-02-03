import React, { useState, useRef } from 'react';
import classes from './Select.module.scss';
import { Option } from './Option';
import cn from 'classnames';
import { ReactComponent as Arrow } from 'assets/svg/arrow_down.svg';
import { ICountry } from '../../types';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { useGetCountries } from '../../hooks/useGetCountries';
import { ErrorText } from '../form/ErrorText';
import { useClickOutside } from '../../hooks/useClickOutside';

interface IProps<T> {
    title: string;
    register: T;
    currentCountry: ICountry | null;
    registerValidations?: RegisterOptions;
    placeholder: string;
    errorText?: string;
}

export const Select = <T extends UseFormRegister<any>>({
    title,
    placeholder,
    register,
    registerValidations,
    currentCountry,
    errorText,
}: IProps<T>) => {
    const [isShowMenu, setShowMenu] = useState(false);
    const { onChange, name } = register('country', registerValidations);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside({ ref, outsideCb: () => setShowMenu(false) });

    const setCountryHandler = (country: ICountry) => () => {
        void onChange({
            target: {
                name,
                value: country.id === currentCountry?.id ? null : country,
            },
        });
    };

    const countries = useGetCountries();

    const clickShowMenu = () => setShowMenu(!isShowMenu);

    return (
        <div className={classes.selectContain}>
            <p>{title}</p>
            <div
                ref={ref}
                onClick={clickShowMenu}
                className={cn(classes.select, {
                    [classes.selectShow]: isShowMenu,
                })}
            >
                <span
                    className={cn({
                        [classes.selectNotValue]: !currentCountry?.name,
                    })}
                >
                    {currentCountry?.name || placeholder}
                </span>
                <Arrow />
                <div onClick={e => e.stopPropagation()} className={classes.selectMenu}>
                    {countries.map(country => (
                        <Option
                            key={country.id}
                            text={country.name}
                            isChecked={country.id === currentCountry?.id}
                            onClick={setCountryHandler(country)}
                        />
                    ))}
                </div>
                <ErrorText errorText={errorText} />
            </div>
        </div>
    );
};
