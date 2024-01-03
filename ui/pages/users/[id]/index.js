// pages/users/[userId].js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getUserById } from '../../../services/user.service';

const UserDetails = () => {
    const [user, setUser] = useState();
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



    // Call fetchUserDetails when the component mounts or when userId changes
    React.useEffect(() => {
        if (userId) {
            fetchUserDetails();
        }
    }, [userId]);



    return (
        <div>
            {/* Header with "Create Group" button */}
            <header>
                <h1>User Details</h1>
            </header>

            {/* Display user details or loading state */}
            <div>
                <p>User Name: {user?.username}</p>
                <p>User Email: {user?.email}</p>
                {/* Add other user details as needed */}
            </div>
        </div>
    );
};

export default UserDetails;
