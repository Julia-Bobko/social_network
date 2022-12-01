export const maxLength = (max) => (value) => 
    (value.length > max) ? `Max length is ${max} symbols`: undefined;

export const required = value => value ? undefined : "Field is required";