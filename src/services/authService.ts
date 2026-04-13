import { loginUser } from "../api/apiClient"
import type { UserLogin } from "../api/apiClient";

export const authService = async (data: UserLogin) => {
    const response = await loginUser(data);
    console.log(response);
    return response.data;
}