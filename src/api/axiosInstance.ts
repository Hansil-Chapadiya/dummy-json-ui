import axios from "axios";
import setInterceptors from "./setInterceptors";

const axiosInstance = axios.create({
    baseURL: `https://dummyjson.com`,
    timeout: 3000
})

setInterceptors(axiosInstance);

export default axiosInstance;