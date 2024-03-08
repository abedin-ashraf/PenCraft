import { useParams } from "react-router-dom";
import { BlogComponent } from "../components/BlogComponent";
import { useBlog } from "../hooks"

export const Blog = () => {
    const { id } = useParams();
    console.log(id);
    const { loading, blog } = useBlog({ id: id || "" });
    // console.log(blog);
    if (loading) {
        return <div>Loading....</div>
    }
    return <div>
        <BlogComponent blog={blog} />
    </div>
}