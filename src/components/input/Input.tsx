import React, {InputHTMLAttributes} from "react";
import classes from './Input.module.scss';

interface IProps {
    title: string;
    placeholder: string;
    type: InputHTMLAttributes<unknown>['type'];
}

export const Input = ({ type, title, placeholder }: IProps) => {
  return <label className={classes.label}>
      <span>{title}</span>
      <input type={type} placeholder={placeholder} />
  </label>
};