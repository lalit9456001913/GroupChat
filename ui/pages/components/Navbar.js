// /frontend/components/Navbar.js
import React from 'react';
const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#4CAF50', // Green background color
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Card-like box shadow
};

const navItemStyles = {
    margin: '0 10px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#fff',
};

const Navbar = ({ onClickLogin, onClickLogout, onClickCreateUser, onClickCreateGroup, onClickViewAllGroups, onClickViewAllUsers, auth }) => {
    return (
        <div style={navbarStyles}>

            <div>
                <span style={navItemStyles} onClick={onClickCreateUser}>
                    Create User
                </span>
                <span style={navItemStyles} onClick={onClickCreateGroup}>
                    Create Group
                </span>
                <span style={navItemStyles} onClick={onClickViewAllGroups}>
                    View All groups
                </span>
                <span style={navItemStyles} onClick={onClickViewAllUsers}>
                    View All users
                </span>

            </div>
            <div>
                {auth && (<>
                    <span style={navItemStyles} onClick={onClickLogout}>
                        Logout
                    </span>
                </>)}
                {!auth && (<>
                    <span style={navItemStyles} onClick={onClickLogin}>
                        Login
                    </span>
                </>)}

            </div>
        </div>
    );
};

export default Navbar;
