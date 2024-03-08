import { Blog } from "../hooks"
import { Appbar } from "./Appbar"


export const BlogComponent = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="grid grid-cols-12 px-10 w-full pt-4">
            <div className="col-span-8">
                <div className="text-3xl font-extrabold">{blog.tittle}</div>
            </div>
            <div className="">{blog?.content}</div>
            <div className="col-span-4">
                {blog?.author.name}
            </div>
        </div>
    </div>
}