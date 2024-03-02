import { ChangeEvent } from "react";

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    visibiliy?: string;
}

export const LabelledInput = ({ label, placeholder, onChange, type, visibiliy }: LabelledInputType) => {
    return <div className={visibiliy}>
        <label className="mt-3 block mb-2 text-sm font-semibold text-black">{label}</label>

        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}