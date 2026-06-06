import axios from "axious";

const API = axios.create({
    baseUrl : "http://localhost:5000/"
});

export default API;