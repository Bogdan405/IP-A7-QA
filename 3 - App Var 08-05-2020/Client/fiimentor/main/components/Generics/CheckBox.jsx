import { FieldProps } from 'formik';
import React, { FC } from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';


interface Props extends FieldProps {
    label: string;
    groupClassName?: string;
    inputClassName?: string;
}

export const Checkbox: FC<Props> = (props: Props) => {
    const {
        field,
        form: { touched, errors },
        label,
        groupClassName,
        inputClassName,
    } = props;

    return (
        <FormGroup className={groupClassName} check>
            <Input
                className={inputClassName}
                {...field}
                id={field.name}
                type="checkbox"
                checked={field.value}
            />
            {touched && errors && (
                <div className={`is-invalid form-control`}>&nbsp;</div>
            )}
            <Label for={field.name} check>
                {label}
            </Label>
            <FormFeedback>{errors.name}</FormFeedback>
        </FormGroup>
    );
};
