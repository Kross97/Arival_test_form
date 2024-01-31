import React from 'react';
import classes from './App.module.scss';
//@ts-ignore
import ss from '#scss';
import { StepIndicator } from './components/stepIndicator/StepIndicator';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';

console.log('ss =>', ss);
function App() {
    return (
        <div className={classes.app}>
            <div className={classes.main}>
                <div className={classes.indicators}>
                    <StepIndicator step={'initial'} />
                    <StepIndicator step={'password'} />
                    <StepIndicator step={'review'} />
                </div>
                <div className={classes.containForm}>
                    <div className={classes.formDescription}>
                        <span>Super test form</span>
                        <span>Initial info</span>
                    </div>
                    <div className={classes.form}>
                        <Input type={'text'} title={'Title'} placeholder={'placeholder'} />
                        <Input type={'text'} title={'Title'} placeholder={'placeholder'} />
                        <Input type={'text'} title={'Title'} placeholder={'placeholder'} />
                        <Button text={'Continue'} />
                        <Button text={'Continue 2'} isDisable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
