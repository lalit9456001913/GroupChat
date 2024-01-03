import React, { useState, useEffect } from 'react';
import CreateGroupForm from '../components/CreateGroupForm';
import Navbar from '../components/Navbar';
import { createGroup, getAllGroups, deleteGroupById } from '../../services/group.service';
import { removeAuth } from '../../services/auth.service';
import { useRouter } from 'next/router';
import { createUser, getAllUsers, deleteUser } from '../../services/user.service';
import CreateUserForm from '../components/CreateUserForm';
import GroupList from '../components/GroupList';
import UserListing from '../components/UserListing';

const Dashboard = ({ auth, groupsData, usersData }) => {
  const [showGroup, setShowGroup] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [groups, setGroups] = useState(groupsData);
  const [users, setUsers] = useState(usersData);
  const router = useRouter();
  const [userOptions, setUserOptions] = useState([]);




  useEffect(() => {
    fetchAllUsers();
  }, [showUser]);


  const handleCreateGroup = async (groupData) => {
    try {
      const data = {
        name: groupData?.groupName,
        userId: groupData.groupAdmin.value,
        members: groupData.members.map(item => item.value)
      }
      data.members.push(groupData.groupAdmin.value);
      const response = await createGroup(data);
      if (response.status) {
        const groupRes = await getAllGroups();
        if (groupRes.status) {
          setGroups(groupRes.data);
        }
        setShowGroup(false)
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateUser = async (userData) => {
    try {
      const response = await createUser(userData);
      if (response.status) {
        setShowUser(false)
      }
    } catch (error) {
      console.log(error);
    }

  };

  const onClickCreateUser = () => {
    setShowUser(true);
  }

  const onClickLogout = () => {
    removeAuth()
    router.push('/login')
  }

  const onClickLogin = () => {
    if (!auth) {
      router.push('/login')
    }
  }

  const onClickCreateGroup = () => {
    setShowGroup(true)
  };

  const onDeleteGroup = async (id, adminId) => {
    const response = await deleteGroupById(id, adminId);
    if (response.status) {
      const res = await getAllGroups();
      if (res.status) {
        setGroups(res.data);
      }
    }
  }

  const onDeleteUser = async (id) => {
    const response = await deleteUser(id);
    if (response.status) {
      const res = await getAllUsers();
      if (res.status) {
        setUsers(res.data);
      }
    }
  }
  const fetchAllUsers = async () => {
    const resp = await getAllUsers();
    if (resp.status) {
      setUsers(resp.data);
      const copyData = [...resp?.data];
      const newModifiedData = copyData.map(item => {
        return {
          label: item.username,
          value: item._id
        }
      })

      setUserOptions(newModifiedData);
    }
  }

  const onCloseGroup = () => {
    setShowGroup(false);
  }
  const onCloseUser = () => {
    setShowUser(false);
  }

  return (
    <div>
      <Navbar
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
        onClickCreateUser={onClickCreateUser}
        onClickCreateGroup={onClickCreateGroup}
        auth={auth}
      />
      <CreateGroupForm onCreateGroup={handleCreateGroup} showGroup={showGroup} options={userOptions} onCloseGroup={onCloseGroup} />
      <CreateUserForm onCreateUser={handleCreateUser} showUser={showUser} onCloseUser={onCloseUser} />
      <div style={{ display: 'flex' }}>
        <GroupList groups={groups} auth={auth} onDeleteGroup={onDeleteGroup} />
        <UserListing users={users} auth={auth} onDeleteUser={onDeleteUser} />
      </div>
    </div>
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
    } else {
      groupsData = []
    }
    const userResp = await getAllUsers();
    let usersData;
    if (userResp.status) {
      usersData = userResp.data
    } else {
      usersData = []
    }
    return { props: { auth, groupsData, usersData } };
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }
};


export default Dashboard;
