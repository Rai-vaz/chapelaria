import { Link } from '@inertiajs/react'

function MenuButton({icon, text, href}) {

    return (  
        <Link className="flex w-[100%] space-x-4 p-2 rounded-md hover:bg-slate-700 my-1 " href={href}>
            {icon}
            <button>
                {text}   
            </button>   
        </Link>
    );
}

export default MenuButton;