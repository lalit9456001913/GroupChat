// UserList.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { getAllUsers, deleteUser } from '../../services/user.service';
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

const UserList = ({ usersData }) => {
    const router = useRouter();
    const [users, setUsers] = useState(usersData);

    const onDelete = async (id) => {
        const response = await deleteUser(id);
        if (response.status) {
            const res = await getAllUsers();
            if (res.status) {
                setUsers(res.data);
            }
        }
    }

    return (
        <UserContainer>
            <h2>User List</h2>
            {users.map((user) => (
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

export const getServerSideProps = async ({ req }) => {
    try {
        const auth = JSON.parse(req.cookies.AUTH);

        if (!auth.token) throw new Error('unAuthorized');

        const userResp = await getAllUsers();
        let usersData;
        if (userResp.status) {
            usersData = userResp.data
        } else {
            usersData = []
        }
        return { props: { auth, usersData } };
    } catch (err) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
};


export default UserList;
