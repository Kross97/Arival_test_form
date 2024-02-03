import React, { useContext } from 'react';
import { FormDataProviderContext } from '../../providers/FormDataProvider';
import { DESCRIPTION_PAGE } from '../../constants/description';
import classes from './Description.module.scss';

export const DescriptionPage = () => {
    const {
        state: { step },
    } = useContext(FormDataProviderContext);

    return (
        <div className={classes.formDescription}>
            <span>Super test form</span>
            <span>{DESCRIPTION_PAGE[step]}</span>
        </div>
    );
};
