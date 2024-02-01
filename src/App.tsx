import React from 'react';
import classes from './App.module.scss';
import { StepIndicator } from './components/stepIndicator/StepIndicator';
import { FormDataProvider } from './providers/FormDataProvider';
import { Form } from './components/form/Form';
import { DescriptionPage } from './components/description/DescriptionPage';

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
                        <DescriptionPage />
                        <Form />
                    </div>
                </div>
            </div>
        </FormDataProvider>
    );
}

export default App;
