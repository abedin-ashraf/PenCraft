import { Appbar } from "./Appbar"
import { Avatar } from "./Avatar"

export const BlogSkeleton = () => {

    return <div>
        <div role="status" className="animate-pulse flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className="h-6 w-6/12 bg-gray-200 rounded-full"></div>
                    <div className="mt-2 h-2 w-3/12 bg-gray-200 rounded-full"></div>
                    <div className="mt-6 h-2.5 w-8/12 bg-gray-200 rounded-full"></div>
                    <div className="mt-2 h-2.5 w-6/12 bg-gray-200 rounded-full"></div>
                    <div className="mt-2 h-2.5 w-8/12 bg-gray-200 rounded-full"></div>
                    <div className="mt-2 h-2.5 w-4/12 bg-gray-200 rounded-full"></div>
                    <div className="mt-2 h-2.5 w-7/12 bg-gray-200 rounded-full"></div>
                    <div className="mt-2 h-2.5 w-8/12 bg-gray-200 rounded-full"></div>
                </div>

                <div className="col-span-4">
                    <div className="h-2.5 w-2/12 bg-gray-200 rounded-full"></div>

                    <div className="mt-4 flex items-center">
                        <div className="mt-2 h-6 w-6 bg-gray-200 rounded-full"></div>
                        <div className="mt-2 h-3 w-4/12 ml-4 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="mt-2 h-2.5 w-5/12 bg-gray-200 rounded-full"></div>

                </div>
            </div>
        </div >
    </div>

}

