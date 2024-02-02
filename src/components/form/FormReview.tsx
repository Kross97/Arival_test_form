import React from 'react';
import { ReviewItem } from './ReviewItem';
import classes from './FormReview.module.scss';
import { IFromStepProps } from '../../types';

export const FormReview = ({ renderAction, className }: IFromStepProps) => {
    return (
        <div className={className}>
            <div className={classes.reviewDescription}>
                <ReviewItem field={'username'} />
                <ReviewItem field={'password'} />
                <ReviewItem field={'country'} />
            </div>
            {renderAction(false)}
        </div>
    );
};
