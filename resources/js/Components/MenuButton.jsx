import { Link } from '@inertiajs/react'


function MenuButton({icon, text, textMargin, href, className}) {

    return (  
        <Link 
            className={"flex align-middle w-[100%] space-x-4 p-2 rounded-md hover:bg-slate-700 my-1 " + className }
           
            href={href}
           
        >
            {icon}
            <button className={textMargin}>
                {text}   
            </button>   
        </Link>
    );
}

export default MenuButton;