import { useSelector } from "react-redux";
import type { RootState } from "../store";

const PostPage = () => {

    const posts = useSelector((state: RootState) => state.posts.posts);

    return (
        <div>
            {posts.map((p) => (
                <div key={p.id}>
                    {p.title}
                </div>
            ))}
        </div>
    )
}

export default PostPage;
