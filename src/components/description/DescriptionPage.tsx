import classes from '../../App.module.scss';
import React, { useContext } from 'react';
import { FormDataProviderContext } from '../../providers/FormDataProvider';
import { DESCRIPTION_PAGE } from '../../constants/description';

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
