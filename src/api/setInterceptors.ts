import type { AxiosInstance } from "axios"

const setInterceptors = (axiosInstance: AxiosInstance) => {

    axiosInstance.interceptors.request.use((config) => {
        const token = localStorage.getItem('accessToken');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    });

    axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
            return Promise.reject({
                message: err.response?.data?.message || `something went wrong`,
                status: err.response?.status,
                code: err.response?.code
            })
        }
    )

}

export default setInterceptors
