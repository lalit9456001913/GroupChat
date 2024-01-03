// /frontend/components/EditUserForm.js
import React, { useState } from 'react';

const EditUserForm = ({ user, onEditUser }) => {
  const [newUsername, setNewUsername] = useState(user?.username);
  const [newPassword, setNewPassword] = useState(user?.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditUser(user._id, { username: newUsername, password: newPassword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Username:
        <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
      </label>
      <label>
        New Password:
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditUserForm;
