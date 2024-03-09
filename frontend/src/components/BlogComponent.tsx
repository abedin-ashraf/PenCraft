import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Avatar"


export const BlogComponent = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">{blog.tittle}</div>
                    <div className="text-slate-500 pt-2">Posted on 22nd December 2023</div>
                    <div className="pt-6 text-lg ">{blog?.content}</div>
                </div>

                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">Author</div>
                    <div className="flex">
                        <div className="pr-2 flex flex-col justify-center"><Avatar name={blog.author.name || "Anonymous"} size={6}></Avatar></div>
                        <div className="pl-2 ">
                            <div className="text-xl font-bold">{blog?.author.name}</div>
                            <div className="pt-2 text-slate-500">Random Catch Phrase about the Author's Ability to grab the user's attention</div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    </div >
}