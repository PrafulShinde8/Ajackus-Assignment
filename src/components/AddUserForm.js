import React, { useState } from 'react';

const AddUserForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            department: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Add new user</p> <br/>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Department:</label>
                <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUserForm;
