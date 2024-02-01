import React, { useContext } from 'react';
import { TKeysFormState } from '../../types';
import { FormDataProviderContext } from '../../providers/FormDataProvider';
import classes from './ReviewItem.module.scss';

interface IProps {
    field: Exclude<TKeysFormState, 'step'>;
}

export const ReviewItem = ({ field }: IProps) => {
    const { state } = useContext(FormDataProviderContext);

    return (
        <div className={classes.itemReview}>
            <span>{field}</span>
            <span>{state[field]}</span>
        </div>
    );
};
