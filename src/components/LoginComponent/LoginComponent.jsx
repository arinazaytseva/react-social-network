import { login } from '../../redux/authReducer';
import classes from './LoginComponent.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RenderField } from '../RenderField/RenderField';
import { required, maxLengthCreator } from '../../utils/validators';


const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field 
                    component={RenderField} name={'email'} 
                    type={'text'} placeholder={'Email'}
                    validate={[ required, maxLength50 ]} />
            </div>
            <div>
                <Field 
                    component={RenderField} name={'password'} 
                    type={'password'} placeholder={'Password'}
                    validate={[ required, maxLength50 ]} />
            </div>
            <div>
                <Field 
                    component={RenderField} name={'rememberMe'} 
                    type={'checkbox'} />Remember me
            </div>
            <div className={classes.formError}>
                {props.error ? props.error : ''}
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const LoginComponent = (props) => {
    const onSubmit = (values) => {
        props.login(values);
    };
    if (props.isAuth) {
        return <Navigate to='/profile' />;
    }
    else {
        return (
            <div className={classes.flexContainer}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { isAuth: state.auth.isAuth };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: ({ email, password, rememberMe }) => {
            dispatch(login(email, password, rememberMe));
        }
    };
};

const ConnectedLoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default ConnectedLoginComponent;