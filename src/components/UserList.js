import React, { useEffect, useState } from 'react';
import { fetchUsers, updateUser, deleteUser, addUser } from '../services/api';
import UserItem from './UserItem';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [editingUser, setEditingUser] = useState(null); // State to hold the user being edited

    useEffect(() => {
        const getUsers = async () => {
            try {
                const usersData = await fetchUsers();
                setUsers(usersData);
            } catch (err) {
                setError('Failed to fetch users');
            }
        };
        getUsers();
    }, []);

    const handleEdit = (user) => {
        setEditingUser(user); // Set the user being edited
    };

    const handleEditSubmit = async (formData) => {
        try {
            const updatedUser = await updateUser(editingUser._id, formData);
            setUsers(users.map(user => user._id === editingUser._id ? updatedUser : user));
            setEditingUser(null); // Clear the editing user state
        } catch (err) {
            setError('Failed to update user');
        }
    };

    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId);
            setUsers(users.filter(user => user._id !== userId));
        } catch (err) {
            setError('Failed to delete user');
        }
    };

    const handleAddUser = async (formData) => {
        try {
            const newUser = await addUser(formData);
            setUsers([...users, newUser]);
        } catch (err) {
            setError('Failed to add user');
        }
    };

    return (
        <div className="container">
            <AddUserForm onSubmit={handleAddUser} />
            {error && <p className="error">{error}</p>}
            <ul className="user-list">
                {users.map(user => (
                    <UserItem
                        key={user._id} // Ensure each user has a unique key
                        user={user}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            {editingUser && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setEditingUser(null)}>&times;</span>
                        <EditUserForm user={editingUser} onSubmit={handleEditSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;
