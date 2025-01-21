# User Management Dashboard

## Overview
This project is a simple web application that allows users to view, add, edit, and delete user details from a mock backend API. It utilizes the JSONPlaceholder API for demonstration purposes.

## Project Structure
```
user-management-dashboard
├── src
│   ├── components
│   │   ├── AddUserForm.js
│   │   ├── EditUserForm.js
│   │   ├── UserList.js
│   │   └── UserItem.js
│   ├── services
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── public
│   ├── index.html
│   └── styles.css
├── package.json
├── README.md
└── .gitignore
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
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

## Features
- **View Users**: Displays a list of users fetched from the `/users` endpoint.
- **Add User**: Allows adding a new user through a form.
- **Edit User**: Enables editing of existing user details.
- **Delete User**: Provides functionality to delete a user.

## Error Handling
The application includes error handling for API requests, displaying appropriate messages to the user in case of failures.

## Bonus Features (Optional)
- Pagination or infinite scrolling for the user list.
- Client-side validation for user input forms.
- Responsive design for better usability across devices.

## Challenges and Improvements
During development, challenges included managing state effectively and ensuring smooth API interactions. If given more time, I would implement more robust error handling and enhance the UI for better user experience.

## License
This project is open-source and available under the MIT License.