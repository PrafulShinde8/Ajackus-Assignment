import axios from 'axios';
require('dotenv').config();

const API_URL = 'https://ajackus-assignment-sipg.onrender.com/api/users';

console.log("API_URI"+API_URL);

export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
};

export const getUser = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
};

export const addUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        throw new Error('Error adding user: ' + error.message);
    }
};

export const updateUser = async (userId, user) => {
    try {
        const response = await axios.put(`${API_URL}/${userId}`, user);
        return response.data;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${API_URL}/${userId}`);
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
};
