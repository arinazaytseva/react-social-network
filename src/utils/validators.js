export const required = (value) => value ? undefined : 'Required';

export const maxLengthCreator = (maxLength) => (value) => 
    (value && (value.length > maxLength)) ? `Must be ${maxLength} characters or less.` : undefined;