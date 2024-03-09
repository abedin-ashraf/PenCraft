import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTittle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar />

        <div className="max-w-lg mx-auto mt-8">
            <label className="block mb-2 text-xl font-medium text-gray-900 ">Title</label>
            <input onChange={(e) => { setTittle(e.target.value); }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-green-800 block w-full p-2.5 focus:outline-none" placeholder="Title" />

            <label className=" pt-4 block mb-2 text-md font-medium text-gray-90">Content</label>
            <textarea onChange={(e) => { setContent(e.target.value) }} rows={18} className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black-500 focus:outline-none focus:border-green-800" placeholder="Start writing ....."></textarea>

            <button onClick={async () => {
                try {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog/post`, {
                        title,
                        content,
                    }, {
                        headers: {
                            Authorization: localStorage.getItem('token')
                        }
                    })
                    console.log(response.data.id);
                    navigate(`/blog/${response.data.id}`);
                } catch (e) {
                    console.log(e);
                }
            }} type="submit" className="mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                Publish post
            </button>
        </div>

    </div>
}