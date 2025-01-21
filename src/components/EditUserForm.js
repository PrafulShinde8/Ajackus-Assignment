// import React, { useEffect, useState } from 'react';
// import { updateUser, getUser } from '../services/api';

// const EditUserForm = ({ userId, onUserUpdated }) => {
//     const [user, setUser] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         department: ''
//     });
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const fetchedUser = await getUser(userId);
//                 setUser(fetchedUser);
//             } catch (err) {
//                 setError('Failed to fetch user data');
//             }
//         };
//         fetchUser();
//     }, [userId]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await updateUser(userId, user);
//             onUserUpdated();
//         } catch (err) {
//             setError('Failed to update user data');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {error && <p>{error}</p>}
//             <div>
//                 <label>First Name:</label>
//                 <input
//                     type="text"
//                     name="firstName"
//                     value={user.firstName}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label>Last Name:</label>
//                 <input
//                     type="text"
//                     name="lastName"
//                     value={user.lastName}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label>Department:</label>
//                 <input
//                     type="text"
//                     name="department"
//                     value={user.department}
//                     onChange={handleChange}
//                 />
//             </div>
//             <button type="submit">Update User</button>
//         </form>
//     );
// };

// export default EditUserForm;


import React, { useState, useEffect } from 'react';

const EditUserForm = ({ user, onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                department: user.department
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
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
            <button type="submit">Update User</button>
        </form>
    );
};

export default EditUserForm;