import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

// this is a redux thunk that adds a user to the server
// axios is used to make the post request
// faker is used to generate a random name for the user
const addUser = createAsyncThunk('users/add', async (user) => {
    const response = await axios.post('http://localhost:3005/users', {
        name: faker.name.fullName(),
    });

    return response.data;
});

export { addUser };