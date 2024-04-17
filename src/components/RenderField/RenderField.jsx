import classes from './RenderField.module.css';


export const RenderField = ({input, placeholder, type, meta: {touched, error}}) => {
    return (
        <div>
            <input className={touched && (error ? classes.error : '')} {...input} placeholder={placeholder} type={type} />
            {touched && (error && <div className={classes.errorText}>{error}</div>)}
        </div>
    );
};