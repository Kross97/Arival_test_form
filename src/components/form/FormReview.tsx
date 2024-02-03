import React, { useContext } from 'react';
import { ReviewItem } from './ReviewItem';
import classes from './FormReview.module.scss';
import { IFromStepProps } from '../../types';
import { FormDataProviderContext } from '../../providers/FormDataProvider';

export const FormReview = ({ renderAction, className }: IFromStepProps) => {
    const { resetHandler } = useContext(FormDataProviderContext);
    return (
        <div className={className}>
            <div className={classes.reviewDescription}>
                <ReviewItem field={'username'} />
                <ReviewItem field={'email'} />
                <ReviewItem field={'country'} />
            </div>
            {renderAction(false, 'Complete', 'button', resetHandler)}
        </div>
    );
};
