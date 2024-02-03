import { useEffect, useState } from 'react';
import { MOCK_COUNTRIES } from '../constants/mockCountries';
import { ICountry } from '../types';

interface ICountryEntity {
    id: number;
    name: { common: string };
}

export const useGetCountries = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name')
            .then(res => res.json())
            .then((countries: ICountryEntity[]) => {
                setCountries(
                    countries.map((country, index) => ({ id: index, name: country.name.common }))
                );
            })
            .catch(() => {
                setCountries(MOCK_COUNTRIES);
            });
    }, []);

    return countries;
};
