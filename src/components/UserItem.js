// import React from 'react';

// const UserItem = ({ user, onEdit, onDelete }) => {
//     return (
//         <li className="user-item">
//             <h3>{user.firstName} {user.lastName}</h3>
//             <p>Email: {user.email}</p>
//             <p>{user._id}</p>
//             <p>Department: {user.department}</p>
//             <button className="edit" onClick={() => onEdit(user._id)}>Edit</button>
//             <button className="delete" onClick={() => onDelete(user._id)}>Delete</button>
//         </li>
//     );
// };

// export default UserItem;

// import React from 'react';

// const UserItem = ({ user, onEdit, onDelete }) => {
//     return (
//         <li className="user-item">
//             <h3>{user.firstName} {user.lastName}</h3>
//             <p>Email: {user.email}</p>
//             <p>{user._id}</p>
//             <p>Department: {user.department}</p>
//             <button className="edit" onClick={() => onEdit(user)}>Edit</button>
//             <button className="delete" onClick={() => onDelete(user._id)}>Delete</button>
//         </li>
//     );
// };

// export default UserItem;



import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
    return (
        <li className="user-item">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            {/* <p>{user._id}</p> */}
            <p>Department: {user.department}</p>
            <button className="edit" onClick={() => onEdit(user)}>Edit</button>
            <button className="delete" onClick={() => onDelete(user._id)}>Delete</button>
        </li>
    );
};

export default UserItem;