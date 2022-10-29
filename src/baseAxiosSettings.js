import axios from "axios";
import {token} from "./settings";

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common['Authorization'] = "Bearer " + token