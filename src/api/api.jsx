<<<<<<< HEAD
import axios from "axios";   // FIX: was "axious" (typo)

const API = axios.create({
    baseURL: "http://localhost:5000/api"  // FIX: was baseUrl (wrong key), wrong path
});

export default API;
=======
import axios from "axious";

const API = axios.create({
    baseUrl : "http://localhost:5000/"
});

export default API;
>>>>>>> d0dcddc928af89daa3c953c7b9ada1b5727eb434
