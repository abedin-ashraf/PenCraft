import { useParams } from "react-router-dom";
import { BlogComponent } from "../components/BlogComponent";
import { useBlog } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";

export const Blog = () => {
    const { id } = useParams();

    const { loading, blog } = useBlog({ id: id || "" });
    // console.log(blog);
    if (loading) {
        return <div>
            <Appbar />
            <div><BlogSkeleton /></div>
        </div>
    }

    const defaultBlog = {
        "content": "string",
        "tittle": "How to become a Web Developer in 2024",
        "id": "101",
        "published_date": "24 July 2024",
        "author": {
            "name": "Ashraf",
        }
    }

    return <div>
        < BlogComponent blog={blog || defaultBlog} />
    </div >
}