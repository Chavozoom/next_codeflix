import React from "react";

type InputProps = {
    id: string;
    type: string;
    label: string;
    placeholder: string;
};

export const InputField = ({ id, type, label, placeholder }: InputProps) => {

    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={type} className="text-sm font-semibold text-gray-500">{label}</label>
            <input
                id={id}
                type={type}
                name={id}
                placeholder={placeholder}
                className="rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none outline-none focus:ring"
            />
        </div>);
};
