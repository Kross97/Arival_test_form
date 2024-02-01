import React, { useState } from 'react';
import classes from './Select.module.scss';
import { Option } from './Option';
import cn from 'classnames';
import { ReactComponent as Arrow } from 'assets/svg/arrow_down.svg';
import { ICountry } from '../../types';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form/dist/types/form';

interface IProps {
    title: string;
    register: UseFormRegister<ICountry>;
    currentCountry: ICountry | null;
    placeholder: string;
}

const countries: ICountry[] = [
    { id: 1, name: 'ssss' },
    { id: 2, name: 'ssss2' },
    { id: 3, name: 'ssss3' },
    { id: 4, name: 'ssss4' },
    { id: 5, name: 'ssss5' },
    { id: 6, name: 'ssss3' },
    { id: 7, name: 'ssss4' },
    { id: 8, name: 'ssss5' },
];

export const Select = ({ title, placeholder, register, currentCountry }: IProps) => {
    const [isShowMenu, setShowMenu] = useState(false);
    const { onChange, name } = register('country', { required: true });

    const setCountryHandler = (country: ICountry) => () => {
        void onChange({
            target: { name, value: country.id === currentCountry?.id ? null : country },
        });
    };

    const clickShowMenu = () => setShowMenu(!isShowMenu);

    return (
        <div className={classes.selectContain}>
            <p>{title}</p>
            <div
                onClick={clickShowMenu}
                className={cn(classes.select, {
                    [classes.selectShow]: isShowMenu,
                })}
            >
                {currentCountry?.name || placeholder}
                <Arrow />
                <div className={classes.selectMenu}>
                    {countries.map(country => (
                        <Option
                            key={country.id}
                            text={country.name}
                            isChecked={country.id === currentCountry?.id}
                            onClick={setCountryHandler(country)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
