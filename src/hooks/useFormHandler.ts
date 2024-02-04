import { useContext } from 'react';
import { IFormStateStep } from '../types';
import { FormDataProviderContext } from '../providers/FormDataProvider';
import { SubmitHandler, UseFormWatch, FieldErrors } from 'react-hook-form';

interface IProps<T extends Partial<IFormStateStep>> {
    watch: UseFormWatch<T>;
    errors: FieldErrors<T>;
}

export const useFormHandler = <T extends Partial<IFormStateStep>>({ errors }: IProps<T>) => {
    const { continueHandler } = useContext(FormDataProviderContext);

    const onSubmit: SubmitHandler<T> = data => {
        continueHandler(data);
    };

    return { onSubmit, isDisableAction: !!Object.keys(errors).length };
};
