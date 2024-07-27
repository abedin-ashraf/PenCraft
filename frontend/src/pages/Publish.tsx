import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { config } from '../openai';
// import { GoogleGenerativeAI } from "@google/generative-ai";




export const Publish = () => {
    const [title, setTittle] = useState("");
    const [content, setContent] = useState("Start writing .....");
    const navigate = useNavigate();

    return <div>
        <Appbar />

        <div className="max-w-lg mx-auto mt-8">
            <label className="block mb-2 text-xl font-medium text-gray-900 ">Title</label>
            <input onChange={(e) => { setTittle(e.target.value); }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-green-800 block w-full p-2.5 focus:outline-none" placeholder="Title" />

            <label className=" pt-4 block mb-2 text-md font-medium text-gray-900">Content</label>
            <textarea onChange={(e) => { setContent(e.target.value) }} rows={18} className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black-500 focus:outline-none focus:border-green-800" placeholder={content}></textarea>

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
            }} className="mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                Publish post
            </button>

            {/* <button onClick={async () => {
                // Access your API key as an environment variable (see "Set up your API key" above)4
                // const genAI = new GoogleGenerativeAI(config.GEMINI_API);
                // For text-only input, use the gemini-pro model
                // const model = genAI.getGenerativeModel({ model: "gemini-pro" });

                const prompt = `${title}`;

                // const result = await model.generateContent(prompt);
                // const response = await result.response;
                console.log(response);

                const text = response.text();
                const cleanedText = text.replace(/[*]/g, '');
                // console.log(cleanedText);
                setContent(cleanedText);
            }} className="mt-4 text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Generate with Gemini</button>
 */}

        </div>

    </div>
}
