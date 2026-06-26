import React from "react"
import { cn } from "../../utils/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:opacity-50 disabled:opacity-50",
                className
            )}
        />
    )
}`  `