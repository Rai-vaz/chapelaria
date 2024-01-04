export default function Table({table}) {


   return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Criação</th>
                </tr>
            </thead>

            <tbody>
                {table.map((element, index) => (
                    
                <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.created_at}</td>
                   
                </tr>
         
                ))}
            </tbody>
        </table>

        
    )
}