import { fetchPosts } from "../api/apiClient"

export const postService = async () => {
    const res = await fetchPosts();
    console.log('post',res.data);
    return res.data;
}