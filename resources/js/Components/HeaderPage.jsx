import { Link } from "@inertiajs/react"


export const HeaderPage = ({icon, title, link, href}) => {

    return (
        <div className="bg-header-color flex p-3 space-x-3 items-center rounded-tr-md border-b relative">
            {icon}
            <h2 className="text-xl">{title}</h2>
            <Link href={href} className="text-sm text-sky-400 absolute right-5 hover:text-white">{link}</Link>
        </div>
    )
}

