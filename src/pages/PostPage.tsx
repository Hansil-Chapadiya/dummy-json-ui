import { useSelector } from "react-redux";
import type { RootState } from "../store";
import "../styles/PostPage.css";

const PostPage = () => {

    const posts = useSelector((state: RootState) => state.posts.posts);

    return (
        <div className="post-container">
            {posts.map((p) => (
                <div className="post-card" key={p.id}>
                    <h3 className="post-title">{p.title}</h3>
                    <p className="post-body">{p.body}</p>
                    <div className="post-tags">
                        {p.tags?.map((t) => (
                            <span className="post-tag" key={t}>{t}</span>
                        ))}
                    </div>
                    <div className="post-meta">
                        <span>👍 {p.reactions?.likes ?? 0}</span>
                        <span>👎 {p.reactions?.dislikes ?? 0}</span>
                        <span>👁️ {p.views ?? 0}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostPage;
