import { fetchUser } from "../api/apiClient"

export const userService = async () => {
    const res = await fetchUser();
    console.log('user', res.data);
    return res.data;
}