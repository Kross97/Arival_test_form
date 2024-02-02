import React, { useContext } from 'react';
import { TKeysFormDataState } from '../../types';
import { FormDataProviderContext } from '../../providers/FormDataProvider';
import classes from './ReviewItem.module.scss';

interface IProps {
    field: TKeysFormDataState;
}

export const ReviewItem = ({ field }: IProps) => {
    const { state } = useContext(FormDataProviderContext);

    const fieldValue = state[field];
    const valueReview = typeof fieldValue === 'string' ? fieldValue : fieldValue?.name;

    return (
        <div className={classes.itemReview}>
            <span>{field}</span>
            <span>{valueReview}</span>
        </div>
    );
};
