import axios from "axios";

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common['Authorization'] = "Bearer "