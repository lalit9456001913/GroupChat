// Login.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { loginUser } from '../../services/user.service';
import { setAuth } from '../../services/auth.service';
import { useRouter } from 'next/router';

// Define the validation schema using yup
const loginSchema = yup.object().shape({
    email: yup.string().required('Email is mandatory').email('Email is not valid'),
    password: yup.string().required('Password is required'),
});

const Login = () => {
    const router = useRouter();
    const [errorOnSubmit, setErrorOnSubmit] = useState('');
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: async (data) => {
            try {
                await loginSchema.validate(data, { abortEarly: false });
                return { values: data, errors: {} };
            } catch (validationErrors) {
                return {
                    values: {},
                    errors: validationErrors.inner.reduce((allErrors, currentError) => {
                        return {
                            ...allErrors,
                            [currentError.path]: currentError.message,
                        };
                    }, {}),
                };
            }
        },
    });

    const onSubmit = async ({ email, password }) => {
        const response = await loginUser({ email, password });
        if (response.status) {
            setAuth(response.data);
            router.push('/dashboard');
        } else {
            setErrorOnSubmit('Eigther Email or Password is wrong!')
        }
    };

    const styles = {
        loginContainer: {
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            fontWeight: 'bold',
            marginBottom: '5px',
        },
        input: {
            padding: '8px',
            marginLeft: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
        },
        submitButton: {
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        submitButtonHover: {
            backgroundColor: '#45a049',
        },
    };

    return (
        <div style={styles.loginContainer}>
            <h2>Login</h2>
            {<p style={{ color: 'red' }}>{errorOnSubmit}</p>}
            <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input type="text" id="email" name="email" {...register('email')} style={styles.input} />
                    {errors?.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input type="password" id="password" name="password" {...register('password')} style={styles.input} />
                    {errors?.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>

                <button type="submit" style={styles.submitButton} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.submitButtonHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.submitButton.backgroundColor}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
