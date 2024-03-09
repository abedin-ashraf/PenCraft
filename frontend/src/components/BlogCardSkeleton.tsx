export const BlogCardSkeleton = () => {
    return <div>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex items-center mt-2">
                <div className=" h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="ml-2 h-3 w-1/12 bg-gray-200 rounded-full"></div>
                <div className="ml-2 h-2 w-2/12 bg-gray-200 rounded-full"></div>
            </div>

            <div className="mt-2 h-3 w-6/12 bg-gray-200 rounded-full"></div>
            <div className="mt-2 h-2 w-9/12 bg-gray-200 rounded-full"></div>


            <div className="mt-4 h-1 w-3/12 bg-gray-200 rounded-full"></div>

        </div>
    </div>
}