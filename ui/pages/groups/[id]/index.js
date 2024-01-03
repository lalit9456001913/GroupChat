import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getGroupById } from '../../../services/group.service';
import SendMessageForm from '../../components/SendMessageForm';
import { socket, socketEmit } from '../../../services/socket';
import { getAuth } from '../../../services/auth.service';
import { getAllGroupMessages } from '../../../services/message.service';

const GroupDetails = () => {

    const [messages, setMessages] = useState([]);

    const router = useRouter();

    const { id: groupId } = router.query;

    const [group, setGroup] = useState(null);

    const auth = getAuth();

    const fetchGroupDetails = async () => {
        try {
            const response = await getGroupById(groupId); // Adjust the API endpoint
            if (response.status) {
                setGroup(response.data);
            } else {
                console.error('Failed to fetch group details');
            }
        } catch (error) {
            console.error('Error fetching group details:', error);
        }
    };

    const fetchGroupMessages = async () => {
        try {
            const response = await getAllGroupMessages(groupId); // Adjust the API endpoint
            if (response.status) {
                setMessages(response.data);
            } else {
                console.error('Failed to fetch group details');
            }
        } catch (error) {
            console.error('Error fetching group details:', error);
        }
    }


    useEffect(() => {
        if (!socket.connected) socket.connect();

        socket.on('message', ({ message }) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        socket.on('connect', () => {
            console.log('Socket Connected:', socket.connected);
            console.log('Connected to Socket.io');
        });

        socket.on('error', (error) => {
            console.error('Socket.io Error:', error);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from Socket.io');
        });


        // Clean up the socket event listener when the component unmounts
        return () => {
            console.log('Socket Disconnected');
            socket.off('message');
        };

    }, []);

    useEffect(() => {
        if (groupId) {
            socketEmit('joinGroup', groupId);
            fetchGroupDetails();
            fetchGroupMessages();
        }
    }, [groupId]);


    if (!group) {
        // Handle the case where group data is still being fetched
        return <p>Loading group details...</p>;
    }
    const handleSendMessage = (message) => {
        // Emit a socket event to send a message to the group
        socketEmit('sendMessage', { groupId: groupId, message, userId: auth?.id });
    };

    const { name, admin, members } = group;

    return (
        <div>
            <div onClick={() => { router.push('/dashboard') }}>Home</div>
            <h2>{name} Group Details</h2>

            <div>
                <h3>Admin:{admin?.username}</h3>
                <p>Email: {admin?.email}</p>
            </div>

            <div>
                <h3>Group Members:</h3>
                {members.length > 0 ? (
                    <ul>
                        {members.map((member) => (
                            <li key={member._id}>
                                {member.name} - {member.email}
                            </li>
                        ))}

                    </ul>
                ) : (
                    <p>No group members yet.</p>
                )}
            </div>

            <div>
                <h3>Number of Group Members:</h3>
                <p>{members.length}</p>
            </div>

            {(group.members.some(member => member._id == auth.id)) && <SendMessageForm onSendMessage={handleSendMessage} messages={messages} />}
        </div>
    );
};

export default GroupDetails;
