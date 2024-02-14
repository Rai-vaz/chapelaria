import { Head } from "@inertiajs/react"
import { HeaderPage } from "@/Components/HeaderPage"
import Table from "@/Components/Table"
import SvgEngrenagem from "@/Components/Svg"


const Participante = () => {
    const dataTable = [
        {
            name: 'Rai vaz',
            email: 'raivaz@email.com',
            dataCriacao: '10/01/2024',
        },
        {
            name: 'Hozana vaz',
            email: 'hoxana@email.com',
            dataCriacao: '10/02/2024',
        }
    ]

   
    
    return (
        <>
            <Head title="Participantes"/>
            <HeaderPage
                iconD={"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}

                title='Participantes cadastrados'
            />

            
            <Table 
                headerTitle={['Nome','E-mail', 'Data de Criação', 'Ações']}
                
                children={
                    dataTable.map((value, index) => (
                        <tr key={index} className="hover:bg-gray-900 cursor-pointer">
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.dataCriacao}</td>
                            <td>{<SvgEngrenagem/>}</td>                            
                        </tr>
                    ))
                } 
            />
            
        </>
    )
}



export default Participante