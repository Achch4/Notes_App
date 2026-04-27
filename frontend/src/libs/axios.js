import axios from "axios";
// localhost is not present in production
const BASEURL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api"
const api = axios.create({
    baseURL : BASEURL,

})
export default api;