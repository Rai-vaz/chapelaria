import { useEffect } from "react"


export default function Table({children, headerTitle}) {

    const td = document.getElementsByTagName('td')

   useEffect(() => {
        for (let index = 0; index < td.length; index++) {
            td[index].classList.add('pt-1.5')
            td[index].classList.add('pb-1.5')
            td[index].classList.add('text-center')
        
        }
   },[])

   return (
        <table className="border border-slate-700 w-[100%]">
            <thead className="bg-slate-700">
                <tr>
                    {
                        headerTitle.map((title, index) => (                            
                            <th  className="text-center pt-2 pb-2" key={index}>{title}</th>
                        ))
                    }
                   
                </tr>
            </thead>

            <tbody>
                {children}
            </tbody>
        </table>

        
    )
}

