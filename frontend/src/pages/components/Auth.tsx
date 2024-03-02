import { Link } from "react-router-dom"
import { LabelledInput } from "./LabelledInput"
import { useState } from "react"
import { SignupInput } from "@abedin-ashraf/pencraft-common"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });



    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-bold">
                        Create an account
                    </div>
                    <div className="text-slate-500">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"} <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Login" : "Sign up"}</Link>
                    </div>
                </div>
                <div className="pt-4">
                    <LabelledInput label="Name" placeholder="Abedin Ashraf....." onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Email" placeholder="nurulabedinashraf@gmail.com" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Password" placeholder="123456" type={"password"} onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                    <button type="button" className=" mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
}