import React from 'react';
import { useForm } from 'react-hook-form';
import CreateUserForm from '../components/CreateUserForm';

const Create = () => {
    const { register, handleSubmit, reset } = useForm();
    const createUser = () => {

    }
    return (
        <div>
            <CreateUserForm register={register} onCreateUser={createUser} handleSubmit={handleSubmit} />
        </div>
    );
};

export default Create;