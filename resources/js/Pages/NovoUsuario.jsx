import FormUser from "@/Components/FormUser"
import { Head } from "@inertiajs/react"
import { HeaderPage } from "@/Components/HeaderPage"


export default function NovoUsuario() {
    return (
        <>
            <HeaderPage 
                iconD="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"

                title='Cadastro de usuário'

                link='Listar usuários'

                href='usuarios'

            />
            <div className="w-[50%] p-5 mx-auto ">
                <FormUser alre={true} rote={'novousuario'}/>
            </div>
        </>
        
    )
}