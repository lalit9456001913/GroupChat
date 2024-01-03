// pages/users/[userId].js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getUserById, getAllUsers } from '../../../services/user.service';
import { createGroup } from '../../../services/group.service';
import CreateGroupForm from '../../components/CreateGroupForm';

const UserDetails = () => {
    const [user, setUser] = useState();
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [userOptions, setUserOptions] = useState([]);
    const router = useRouter();
    const { id: userId } = router.query;

    // Replace this with your actual logic to fetch user details
    const fetchUserDetails = async () => {
        try {
            // Fetch user details based on userId
            // For example, you can make an API request or use local data
            const response = await getUserById(userId);
            if (response.status) {
                setUser(response.data)
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };


    const handleCreateGroup = async (groupData) => {
        try {
            const data = {
                name: groupData?.groupName,
                userId,
                members: groupData.members.map(item => item.value)
            }
            const response = await createGroup(data);
            console.log("response----", response)
            if (response.status) {
                router.push('/groups')
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

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

    // Call fetchUserDetails when the component mounts or when userId changes
    React.useEffect(() => {
        if (userId) {
            fetchUserDetails();
            fetchAllUsers();
        }
    }, [userId]);

    const onClickCreateGroup = () => {
        setShowCreateGroup(true)
    };

    const onClose = () => {
        setShowCreateGroup(false)
    }
   
    return (
        <div>
            {/* Header with "Create Group" button */}
            <header>
                <h1>User Details</h1>
                <button onClick={onClickCreateGroup}>Create Group</button>
            </header>

            {/* Display user details or loading state */}
            <div>
                <p>User Name: {user?.username}</p>
                <p>User Email: {user?.email}</p>
                {/* Add other user details as needed */}
            </div>
            <CreateGroupForm onCreateGroup={handleCreateGroup} showGroup={showCreateGroup} options={userOptions} onClose={onClose} />
        </div>
    );
};

export default UserDetails;
