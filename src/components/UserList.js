// import React, { useEffect, useState } from 'react';
// import { fetchUsers, updateUser, deleteUser } from '../services/api';
// import UserItem from './UserItem';

// const UserList = ({ onEditUser }) => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState('');
//     const [editingUser, setEditingUser] = useState(null); // State to hold the user being edited

//     useEffect(() => {
//         const getUsers = async () => {
//             try {
//                 const usersData = await fetchUsers();
//                 setUsers(usersData);
//             } catch (err) {
//                 setError('Failed to fetch users');
//             }
//         };
//         getUsers();
//     }, []);

//     const handleEdit = (user) => {
//         setEditingUser(user); // Set the user being edited
//     };

//     const handleEditSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const updatedUser = await updateUser(editingUser._id, editingUser);
//             setUsers(users.map(user => user._id === editingUser._id ? updatedUser : user));
//             setEditingUser(null); // Clear the editing user state
//         } catch (err) {
//             setError('Failed to update user');
//         }
//     };

//     const handleDelete = async (userId) => {
//         try {
//             await deleteUser(userId);
//             setUsers(users.filter(user => user._id !== userId));
//         } catch (err) {
//             setError('Failed to delete user');
//         }
//     };
    
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setEditingUser({ ...editingUser, [name]: value });
//     };

//     return (
//         <div className="container">
//             {users.map(user => (
//                 <UserItem
//                     key={user._id} // Ensure each user has a unique key
//                     user={user}
//                     onEdit={() => handleEdit(user)}
//                     onDelete={handleDelete}
//                 />
//             ))}
//             {editingUser && (
//                 <form onSubmit={handleEditSubmit}>
//                     <input
//                         type="text"
//                         name="firstName"
//                         value={editingUser.firstName}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         name="lastName"
//                         value={editingUser.lastName}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         value={editingUser.email}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         name="department"
//                         value={editingUser.department}
//                         onChange={handleChange}
//                     />
//                     <button type="submit">Update User</button>
//                 </form>
//             )}
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// // const UserList = ({ users, onEditUser, onDeleteUser }) => {
// //     return (
// //         <ul>
// //             {users.map(user => (
// //                 <li key={user.id}>
// //                     {user.name}
// //                     <button onClick={() => onEditUser(user.id)}>Edit</button>
// //                     <button onClick={() => onDeleteUser(user.id)}>Delete</button>
// //                 </li>
// //             ))}
// //         </ul>
// //     );
// // };

// export default UserList;

// import React, { useEffect, useState } from 'react';
// import { fetchUsers, updateUser, deleteUser, addUser } from '../services/api';
// import UserItem from './UserItem';
// import AddUserForm from './AddUserForm';

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState('');
//     const [editingUser, setEditingUser] = useState(null); // State to hold the user being edited

//     useEffect(() => {
//         const getUsers = async () => {
//             try {
//                 const usersData = await fetchUsers();
//                 setUsers(usersData);
//             } catch (err) {
//                 setError('Failed to fetch users');
//             }
//         };
//         getUsers();
//     }, []);

//     const handleEdit = (user) => {
//         setEditingUser(user); // Set the user being edited
//     };

//     const handleEditSubmit = async (formData) => {
//         try {
//             const updatedUser = await updateUser(editingUser._id, formData);
//             setUsers(users.map(user => user._id === editingUser._id ? updatedUser : user));
//             setEditingUser(null); // Clear the editing user state
//         } catch (err) {
//             setError('Failed to update user');
//         }
//     };

//     const handleDelete = async (userId) => {
//         try {
//             await deleteUser(userId);
//             setUsers(users.filter(user => user._id !== userId));
//         } catch (err) {
//             setError('Failed to delete user');
//         }
//     };

//     const handleAddUser = async (formData) => {
//         try {
//             const newUser = await addUser(formData);
//             setUsers([...users, newUser]);
//         } catch (err) {
//             setError('Failed to add user');
//         }
//     };

//     return (
//         <div className="container">
//             <AddUserForm onSubmit={handleAddUser} />
//             <ul>
//                 {users.map(user => (
//                     <UserItem
//                         key={user._id} // Ensure each user has a unique key
//                         user={user}
//                         onEdit={handleEdit}
//                         onDelete={handleDelete}
//                     />
//                 ))}
//             </ul>
//             {editingUser && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={() => setEditingUser(null)}>&times;</span>
//                         <AddUserForm user={editingUser} onSubmit={handleEditSubmit} />
//                     </div>
//                 </div>
//             )}
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default UserList;





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