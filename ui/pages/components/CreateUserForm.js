// /frontend/components/CreateUserForm.js
import React from 'react';


const CreateUserForm = ({ onCreateUser, handleSubmit, register }) => {


  const onSubmit = async (data) => {
    // Call your onCreateUser function with the form data
    await onCreateUser(data);

    // Reset the form after submission
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username:
        <input type="text" {...register('username')} />
      </label>
      <label>
        Password:
        <input type="password" {...register('password')} />
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
