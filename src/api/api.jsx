import axios from "axios";   // FIX: was "axious" (typo)

const API = axios.create({
    baseURL: "http://localhost:5000/api"  // FIX: was baseUrl (wrong key), wrong path
});

export default API;
