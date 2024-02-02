import { INITIAL_STATE_FORM } from '../constants/formDataProvider';

export type TStep = 'initial' | 'password' | 'review';

export type TKeysFormState = keyof typeof INITIAL_STATE_FORM;

export type TKeysFormDataState = Exclude<TKeysFormState, 'step'>;

export interface IFormDataProvider {
    step: TStep;
    username: string;
    email: string;
    country: ICountry | null;
    password: string;
}

export type IFormStateStep<T extends TKeysFormDataState = TKeysFormDataState> = Pick<
    IFormDataProvider,
    T
>;

export type TContinueHandler = (partState: Partial<Omit<IFormDataProvider, 'step'>>) => void;

export interface IFromStepProps {
    className: string;
    renderAction: (isDisabled: boolean) => JSX.Element;
}

export interface ICountry {
    id: number;
    name: string;
}
