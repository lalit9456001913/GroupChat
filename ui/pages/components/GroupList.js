// /frontend/components/GroupList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { getAllGroups, deleteGroupById } from '../../services/group.service';
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

const GroupList = ({ auth, groups, onDeleteGroup }) => {
  const router = useRouter();

  const onDelete = async (id, adminId) => {
    onDeleteGroup(id, adminId);
  }

  return (
    <>
      <GroupContainer style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <h2>{auth?.username} Messaging Groups</h2>
        {groups.map((group) => {
          if (group.members.some(member => member._id == auth.id)) {
            return (
              <GroupItem key={group._id}>
                <div>
                  <h3>{group.name}</h3>
                </div>
                <div>
                  <button onClick={() => { router.push(`/groups/${group?._id}`) }}>view</button>
                  <button onClick={() => { router.push(`/groups/${group?._id}/edit`) }}>Edit</button>
                  {auth.isAdmin && <button onClick={() => { onDelete(group?._id, group?.admin) }}>Delete</button>}
                </div>
              </GroupItem>
            )
          }
        })}
      </GroupContainer>
      <GroupContainer style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <h2>{auth?.username} Groups (Admin)</h2>
        {groups.map((group) => {
          if (group.admin == auth.id) {
            return (
              <GroupItem key={group._id}>
                <div>
                  <h3>{group.name}</h3>
                </div>
                <div>
                  <button onClick={() => { router.push(`/groups/${group?._id}`) }}>view</button>
                  <button onClick={() => { router.push(`/groups/${group?._id}/edit`) }}>Edit</button>
                  <button onClick={() => { onDelete(group?._id, group?.admin) }}>Delete</button>
                </div>
              </GroupItem>
            )
          }
        })}
      </GroupContainer>
      <GroupContainer style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <h2>All Group List</h2>
        {groups.map((group) => (
          <GroupItem key={group._id}>
            <div>
              <h3>{group.name}</h3>
            </div>
            <div>
              <button onClick={() => { router.push(`/groups/${group?._id}`) }}>view</button>
              <button onClick={() => { router.push(`/groups/${group?._id}/edit`) }}>Edit</button>
              {auth.isAdmin && <button onClick={() => { onDelete(group?._id, group?.admin) }}>Delete</button>}
            </div>
          </GroupItem>
        ))}
      </GroupContainer>

    </>
  );
};

export default GroupList;
