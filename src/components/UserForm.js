import React, { useState } from 'react';
import { addUser } from '../services/api';

const UserForm = ({ onUserAdded }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(user);
            onUserAdded();
        } catch (err) {
            setError('Failed to add user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Department:</label>
                <input
                    type="text"
                    name="department"
                    value={user.department}
                    onChange={handleChange}
                />
            </div>
            <button className="add" type="submit">Add User</button>
        </form>
    );
};

export default UserForm;