
import { MenuBar } from "./MenuBar";
import { Link } from "react-router-dom";

export const Appbar = () => {
    return <div className="border-b relative ">
        <div className="flex justify-between items-center pt-4 pb-1 mx-20 ">
            <div>
                <Link to={'/blogs'}>
                    <div className="mr-4 flex flex-col justify-center font-semibold cursor-pointer text-green-700">PenCraft</div>
                </Link>


            </div>
            <div className="flex">
                <div>
                    <Link to={'/publish'}>
                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
                    </Link>
                </div>
                <div> <MenuBar /></div>
            </div>

        </div>
    </div>
}
