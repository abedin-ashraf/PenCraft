import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { format } from 'date-fns';

interface BlogCardProps {
    id: string,
    authorName: string;
    title: string;
    content: string;
    published_date: string;
}

export const BlogCard = ({ id, authorName, title, content, published_date }: BlogCardProps) => {
    const formattedDate = format(published_date, 'MMMM d, yyyy, h:mm a');
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">

                <Avatar name={authorName} size={6} />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="pl-2 flex justify-center flex-col"><Circle /></div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">{formattedDate}</div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.substring(0, 100) + "....."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div></Link>


}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500"></div>
}
