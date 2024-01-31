import React from 'react';
import classes from './App.module.scss';
import { StepIndicator } from './components/stepIndicator/StepIndicator';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';
import { FormDataProvider } from './providers/FormDataProvider';
import { Form } from './components/form/Form';

function App() {
    return (
        <FormDataProvider>
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
                        <Form />
                    </div>
                </div>
            </div>
        </FormDataProvider>
    );
}

export default App;
