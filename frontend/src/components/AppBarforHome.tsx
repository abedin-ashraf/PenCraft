import { Link } from "react-router-dom"



export const AppbarforHome = () => {
    return <div className="border-b relative">
        <div className="flex justify-between items-center px-10 pt-4 pb-1">
            <div>
                <Link to={'/'}>
                    <div className="mr-4 flex flex-col justify-center font-semibold cursor-pointer text-green-700">PenCraft</div>
                </Link>


            </div>
            <div className="flex">
                <div>
                    <Link to={'/signup'}>
                        <button type="button" className="text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/signin'}>
                        <button type="button" className="text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign in</button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
}