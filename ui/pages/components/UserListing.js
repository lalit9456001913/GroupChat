// pages/users/[userId].js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';


const UserContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin: 0;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 8px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const UserDetails = ({ users, auth }) => {
    const router = useRouter();

    const onDelete=(id)=>{

    }
    return (
        <UserContainer>
            <h2>User List</h2>
            {users?.length && users?.map((user) => (
                <UserItem key={user._id}>
                    <div>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                    </div>
                    <div>
                        <button onClick={() => { router.push(`/users/${user?._id}`) }}>View</button>
                        <button onClick={() => { router.push(`/users/${user?._id}/edit`) }}>Edit</button>
                        <button onClick={() => { onDelete(user?._id) }}>Delete</button>
                    </div>
                </UserItem>
            ))}
        </UserContainer>
    );
};

export default UserDetails;
