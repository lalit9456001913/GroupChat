import React from 'react';
import { useForm } from 'react-hook-form';
import EditUserForm from "../../components/EditUserForm";
const Edit = () => {
    const { register, handleSubmit, reset } = useForm();
    const updateUser = () => {

    }
    return (
        <div>
            <EditUserForm register={register} onEditUser={updateUser} />
        </div>
    );
};

export default Edit;