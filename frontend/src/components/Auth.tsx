import { Link, useNavigate } from "react-router-dom"
import { LabelledInput } from "./LabelledInput"
import { useState } from "react"
import { SignupInput } from "@abedin-ashraf/pencraft-common"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem('token', jwt);
            navigate("/blogs/");
        } catch (e) {
            //alert the user here that the request failed
            alert(`Error while ${type === 'signup' ? "sign up" : "sign in"}`);
        }
    }



    return <div className="h-screen flex justify-center flex-col ">
        <div className="flex justify-center">
            <div className="border rounded p-4">
                <div className="px-2 text-center">
                    <div className="text-2xl font-bold">
                        {type === "signup" ? "Create an account" : "Have an account"}
                    </div>
                    <div className="text-slate-500 ">Enter your email below to {type === 'signup' ? 'signup' : 'signin'} for account</div>
                </div>
                <div className="pt-4">
                    <LabelledInput visibiliy={type === "signin" ? "hidden" : "block"} label="Name" placeholder="Your Name" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Email" placeholder="Your Email" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Password" placeholder="********" type={"password"} onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                    <button onClick={sendRequest} type="button" className=" mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>

                    <div className="text-slate-500 text-center ">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"} <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Sign in" : "Sign up"}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}