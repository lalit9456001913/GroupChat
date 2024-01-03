// /frontend/components/CreateGroupForm.js
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import Modal from 'react-modal';
import * as yup from 'yup';
import { yupValidator } from '../../lib/yup-validator';

const validationSchema = yup.object().shape({
  groupName: yup.string().required('Group Name is required'),
  members: yup.array().min(1, 'Select at least one member').required('Members are required'),
});

const CreateGroupForm = ({ onCreateGroup, options, showGroup, onClose }) => {

  const [isButtonHovered, setButtonHovered] = useState(false);
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors }, // Access form errors from react-hook-form
  } = useForm({
    resolver: yupValidator(validationSchema), // Integrate yup validation schema
  });


  const onSubmit = async (data) => {
    await onCreateGroup(data);
    reset({
      groupName: '',
      members: '',
    });
    onClose();
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
      isOpen={showGroup}
      onRequestClose={onClose}
      contentLabel="Create Group Form"
      style={customStyles}
      ariaHideApp={false}
    >
      <h2>Create Group Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Group Name:
          <input type="text" name="groupName" {...register('groupName')} style={inputStyle} />
          {errors.groupName && <p style={{ color: 'red' }}>{errors.groupName.message}</p>}
        </label>
        <label>
          Members:
          <Controller
            name="members"
            control={control}
            render={({ field }) => (
              <Select {...field} options={options} isMulti style={inputStyle} />
            )}
          />
          {errors.members && <p style={{ color: 'red' }}>{errors.members.message}</p>}
        </label>
        <div style={buttonContainerStyle}>
          <button
            type="button"
            onClick={onClose}
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
            Create Group
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateGroupForm;
