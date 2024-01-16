import { Link } from "@inertiajs/react"


export const HeaderPage = ({iconD, title, link, href}) => {

    return (
        <div className="bg-header-color flex p-3 space-x-3 items-center rounded-tr-md border-b relative">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-10 h-10"                        
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d={iconD}
                />
            </svg>
            <h2 className="text-xl">{title}</h2>
            <Link href={href} className="text-sm text-sky-400 absolute right-5 hover:text-white">{link}</Link>
        </div>
    )
}

