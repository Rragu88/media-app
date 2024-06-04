import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// this is a redux thunk that fetches users from the server
// axios is used to make the get request
const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const response = await axios.get('http://localhost:3005/users');
    // Dev Only!!
    await pause(1000);
    return response.data;
});

// Dev Only!!
const pause = (duration) => new Promise(resolve => setTimeout(resolve, duration));


export { fetchUsers };