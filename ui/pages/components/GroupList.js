// /frontend/components/GroupList.js
import React from 'react';
const groupListStyles = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px',
  backgroundColor: '#f9f9f9',
};

const groupUlStyles = {
  listStyleType: 'none',
  padding: '0',
};

const groupItemStyles = {
  cursor: 'pointer',
  padding: '8px',
  margin: '4px',
  border: '1px solid #ddd',
  backgroundColor: '#fff',
  transition: 'background-color 0.3s ease',
};

const GroupList = ({ groups, onSelectGroup }) => {
  return (
    <div style={groupListStyles}>
      <h2>Groups</h2>
      <ul style={groupUlStyles}>
        {groups.map((group) => (
          <li key={group._id} onClick={() => onSelectGroup(group._id)} style={groupItemStyles}>
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
