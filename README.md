# User Management Dashboard
![Project Screenshot](https://github.com/PrafulShinde8/Ajackus-Assignment/blob/464e4783451847e6aa302bb4001424d99c6c8ac7/Screenshot%20(80).png)
User can add their data to user list 

![Project Screenshot](https://github.com/PrafulShinde8/Ajackus-Assignment/blob/d926da3108abb9fe83d9d7ece2d3754e310fc9b1/Screenshot%20(76).png)
Users list with data Edit and Delete button
![Project Screenshot](https://github.com/PrafulShinde8/Ajackus-Assignment/blob/3d612ecacb2bf78c3e47bcf46fc6a9338adda558/Screenshot%20(77).png)
Update user form popped up after clicking on Edit button to update the data.
## Overview
The User Management Dashboard is a full-stack web application that allows users to efficiently view, add, update, and delete user data. It is built using modern web development technologies and follows a modular structure for better maintainability and scalability. The project leverages MongoDB as the database to store and manage user information.The frontend provides a user-friendly interface for managing users and supports CRUD operations seamlessly. Additionally, Instead of mock backend API I have used my own data using MongoDB worked really hard.
## Project Structure
```
user-management-dashboard
├──backend
|  ├── src
|  |    ├──config
|  |    |  ├── db.js
|  |    ├──models
|  |    |  ├──User.js
|  |    ├──routes
|  |    |  ├──users.js
|  |    ├──app.js
|  ├──.env
|  ├──package-lock.json
|  ├──package.json
├── src
│   ├── components
│   │   ├── AddUserForm.js
│   │   ├── EditUserForm.js
|   |   ├── UserForm.js
│   │   ├── UserList.js
│   │   └── UserItem.js
|   ├── styles.css
│   ├── services
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── public
│   ├── index.html
├── package.json
├── README.md
└── .gitignore
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/PrafulShinde8/Ajackus-Assignment
   ```
2. Navigate to the project directory:
   ```
   cd user-management-dashboard
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.
6. For backend
   ```
   cd backend
7. To run backend
   ```
   node src/app.js

## Features
- **View Users**: Displays a list of users fetched.
- **Add User**: Allows adding a new user through a form.
- **Edit User**: Enables editing of existing user details.
- **Update User**: Allow users to update data.
- **Delete User**: Provides functionality to delete a user.

## Error Handling
The application includes error handling for API requests, displaying appropriate messages to the user in case of failures.


## Challenges and Improvements
If given more time, I was able to enhance the UI for better user experience.

## License
This project is open-source and available under the MIT License.
