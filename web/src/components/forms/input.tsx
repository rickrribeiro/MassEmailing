import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}
export function Input(props: InputProps){
    return(
        <input  
            {...props}
            className="bg-zinc-300 py-3 px-4 rounded text-small placeholder:text-zinc-500" />
    )
}