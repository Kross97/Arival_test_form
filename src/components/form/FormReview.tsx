import React, { PropsWithChildren } from 'react';
import { ReviewItem } from './ReviewItem';
import classes from './FormReview.module.scss';

export const FormReview = ({ children, className }: PropsWithChildren<{ className: string }>) => {
    return (
        <div className={className}>
            <div className={classes.reviewDescription}>
                <ReviewItem field={'username'} />
                <ReviewItem field={'password'} />
                <ReviewItem field={'country'} />
            </div>
            {children(true)}
        </div>
    );
};
