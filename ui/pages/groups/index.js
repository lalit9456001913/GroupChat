// UserList.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { getAllGroups, deleteGroup } from '../../services/group.service';
import { useRouter } from 'next/router';

const GroupContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const GroupItem = styled.div`
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

const GroupList = ({ auth, groupsData }) => {
    const router = useRouter();
    const [groups, setGroups] = useState(groupsData);

    const onDelete = async (id) => {
        const response = await deleteGroup(id);
        if (response.status) {
            const res = await getAllGroups();
            if (res.status) {
                setGroups(res.data);
            }
        }
    }

    return (
        <GroupContainer>
            <h2>Group List</h2>
            {groups.map((group) => (
                <GroupItem key={group._id}>
                    <div>
                        <h3>{group.name}</h3>
                    </div>
                    <div>
                        <button onClick={() => { router.push(`/groups/${group?._id}`) }}>view</button>
                        <button onClick={() => { router.push(`/groups/${group?._id}/edit`) }}>Edit</button>
                        <button onClick={() => { onDelete(group?._id) }}>Delete</button>
                    </div>
                </GroupItem>
            ))}
        </GroupContainer>
    );
};

export const getServerSideProps = async ({ req }) => {
    try {
        const auth = JSON.parse(req.cookies.AUTH);

        if (!auth.token) throw new Error('unAuthorized');
        const groupRes = await getAllGroups();
        let groupsData;
        if (groupRes.status) {
            groupsData = groupRes.data;
        }

        return { props: { auth, groupsData } };
    } catch (err) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
};


export default GroupList;
