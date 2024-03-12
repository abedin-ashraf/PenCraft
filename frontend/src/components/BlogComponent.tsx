import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { format } from "date-fns"


export const BlogComponent = ({ blog }: { blog: Blog }) => {
    const lines = blog.content.split('\n');

    const paragraphs: JSX.Element[] = lines.map((line, index) => {
        if (line.trim() === '') {
            return <br key={index} />;
        }
        return <p key={index}>{line}</p>;
    });

    const formattedDate = format(blog.published_date, 'MMMM d, yyyy, h:mm a');


    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">{blog.tittle}</div>
                    <div className="text-slate-500 pt-2">Published on {formattedDate}</div>
                    <div className="pt-6 text-lg ">{paragraphs}</div>

                </div>

                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">Author</div>
                    <div className="flex">
                        <div className="pr-2 mt-1 flex flex-col">
                            <div className={`inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-green-700 rounded-full`}>
                                <span className="font-xs font-extralight text-gray-600 dark:text-gray-300">{blog.author.name.charAt(0)}</span>
                            </div>
                        </div>
                        <div className="pl-2 ">
                            <div className="text-xl font-bold">{blog?.author.name}</div>
                            <div className="pt-2 text-slate-500">Random Catch Phrase about the Author's Ability to grab the user's attention</div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
        <div className="mb-16"></div>
    </div >
}