import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton"




export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="">
                {blogs.map(blog => <BlogCard id={blog.id || ""} authorName={blog.author.name} title={blog.tittle} content={blog.content} publishedDate="2nd Feb 2024" />
                )}
            </div>
        </div>
    </div>
}