// import React, { useState } from 'react';
// import { addUser } from '../services/api';

// const AddUserForm = ({ onUserAdded }) => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [department, setDepartment] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newUser = { firstName, lastName, email, department };
//         try {
//             await addUser(newUser);
//             onUserAdded();
//             setFirstName('');
//             setLastName('');
//             setEmail('');
//             setDepartment('');
//         } catch (err) {
//             setError('Failed to add user');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {error && <p>{error}</p>}
//             <div>
//                 <label>First Name:</label>
//                 <input
//                     type="text"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Last Name:</label>
//                 <input
//                     type="text"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Department:</label>
//                 <input
//                     type="text"
//                     value={department}
//                     onChange={(e) => setDepartment(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit">Add User</button>
//         </form>
//     );
// };

// export default AddUserForm;

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