import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"
import { BlogCardSkeleton } from "../components/BlogCardSkeleton"




export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                </div>
            </div>
        </div>
    }
    return <div >
        <Appbar />
        <div className="flex justify-center">

            <div className="">
                {blogs.map(blog => <BlogCard id={blog.id || ""} authorName={blog.author.name} title={blog.tittle} content={blog.content} published_date={blog.published_date} />
                )}
            </div>
        </div>
    </div>
}