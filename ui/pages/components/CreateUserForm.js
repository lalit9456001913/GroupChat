// /frontend/components/CreateUserForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupValidator } from '../../lib/yup-validator';
import Modal from 'react-modal';

const CreateUserForm = ({ onCreateUser, onCloseUser, showUser }) => {
  const [isButtonHovered, setButtonHovered] = useState(false);
  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: { errors }, // Access form errors from react-hook-form
  } = useForm({
    resolver: yupValidator(yup.object().shape({
      username: yup.string().required('Username is required'),
      email: yup.string().email().required('Email is required'),
      password: yup.string().required('Password is required'),
    })),
  });



  const onSubmit = async (data) => {
    // Call your onCreateUser function with the form data
    await onCreateUser(data);

    // Reset the form after submission
    reset({
      username: '',
      password: ''
    });
    onCloseUser()
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '4px',
    marginBottom: '12px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px', // Added margin-top to separate from form inputs
    width: '100%', // Set the width to 100% to center-align the buttons
  };

  const cancelButtonStyle = {
    backgroundColor: '#DC3545',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px', // Added margin-right to create space between buttons
  };

  const buttonStyle = {
    backgroundColor: isButtonHovered ? '#0D6EFD' : '#007BFF',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const customStyles = {
    content: {
      width: '50%',
      height: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  return (
    <Modal
      isOpen={showUser}
      onRequestClose={onCloseUser}
      contentLabel="Create User Form"
      style={customStyles}
      ariaHideApp={false}
    >
      <h2>Create User Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <input type="text" {...register('username')} style={inputStyle} />
          {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
        </label>
        <label>
          Email:
          <input type="text" {...register('email')} style={inputStyle} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </label>
        <label>
          Password:
          <input type="password" {...register('password')} style={inputStyle} />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </label>
        <div style={buttonContainerStyle}>
          <button
            type="button"
            onClick={onCloseUser}
            style={cancelButtonStyle}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={() => setButtonHovered(true)}
            onMouseOut={() => setButtonHovered(false)}
          >
            Create User
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateUserForm;
