import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { fetchUsers, deleteUser, updateUser } from './services/api';

const App = () => {
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const usersData = await fetchUsers();
            console.log("usersData:", usersData); // Log the entire usersData object
            setUsers(usersData);
        };
        getUsers();
    }, []);

    const handleUserAdded = async () => {
        const usersData = await fetchUsers();
        setUsers(usersData);
    };

    const handleUserUpdated = async () => {
        const usersData = await fetchUsers();
        setUsers(usersData);
        setEditingUserId(null);
    };

    const handleDeleteUser = async (userId) => {
        await deleteUser(userId); // Add this line to delete the user
        const usersData = await fetchUsers();
        setUsers(usersData);
    };

    return (
        <div className="container">
            <h1>User Management Dashboard</h1>
            {/* {editingUserId ? (
                <EditUserForm userId={editingUserId} onUserUpdated={handleUserUpdated} />
            ) : (
                <AddUserForm onUserAdded={handleUserAdded} />
            )} */}
            <UserList users={users} onEditUser={setEditingUserId} onDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default App;