import React, { useState, useEffect } from 'react';
import CreateGroupForm from '../components/CreateGroupForm';
import Navbar from '../components/Navbar';
import { createGroup, getAllGroups } from '../../services/group.service';
import { removeAuth } from '../../services/auth.service';
import { useRouter } from 'next/router';
import { getAllUsers, loginUser } from '../../services/user.service';

const Dashboard = ({ auth }) => {

  const [showGroup, setShowGroup] = useState(false);
  const router = useRouter();
  const [userOptions, setUserOptions] = useState([]);




  useEffect(() => {
    fetchAllUsers();
  }, []);


  const handleCreateGroup = async (groupData) => {
    try {
      const data = {
        name: groupData?.groupName,
        userId: auth?.id,
        members: groupData.members.map(item => item.value)
      }
      const response = await createGroup(data);
      if (response.status) {
        router.push('/groups')
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onClickCreateUser = () => {
    router.push('/users/create-user')
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

  const onClickViewAllGroups = () => {
    router.push('/groups')
  };

  const onClickViewAllUsers = () => {
    router.push('/users')
  }

  const fetchAllUsers = async () => {
    const resp = await getAllUsers();
    if (resp.status) {
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

  const onClose = () => {
    setShowGroup(false);
  }

  return (
    <div>
      <Navbar
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
        onClickCreateUser={onClickCreateUser}
        onClickCreateGroup={onClickCreateGroup}
        auth={auth}
        onClickViewAllGroups={onClickViewAllGroups}
        onClickViewAllUsers={onClickViewAllUsers}
      />
      <CreateGroupForm onCreateGroup={handleCreateGroup} showGroup={showGroup} options={userOptions} onClose={onClose} />

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
