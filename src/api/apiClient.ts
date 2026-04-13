import axiosInstance from "./axiosInstance"

export type UserLogin = {
    username : string,
    password : string
}

export const loginUser = (data : UserLogin) => 
    axiosInstance.post(`auth/login`, data);

export const fetchUser = () => 
    axiosInstance.get(`users`);

export const fetchPosts = () => 
    axiosInstance.get(`posts`);

export const fetchProducts = () => 
    axiosInstance.get(`products`);