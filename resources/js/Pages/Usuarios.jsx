import Table from "@/Components/Table"
import { HeaderPage } from "@/Components/HeaderPage"
import { Head } from "@inertiajs/react"

const Usuarios = ({table}) => {

    return (
        <>
           <Head title="Usuários"/>
           <HeaderPage 
                iconD={"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}
                title='Usuários cadastrados'
                link='Novo usuário'
                href='novousuario'
           />
           <Table 
                headerTitle={['Nome','E-mail','Criação','Ações']}
                
                data={table}
            />
            
        </>
    )
}

export default Usuarios