import { useState, useEffect } from "react"
import Pagination from "@/Components/Pagination"
import Svg from "@/Components/Svg"
import SearchBar from "@/Components/SearchBar"



export default function Table({data, headerTitle}) {
    //ordenando dados
    data.sort(function(a, b) {
        if (a.id > b.id ) {
            return -1;
        }else{
            return true;
        }
    })

    //dados a serem exibidos
    const [processedData, setProcessedData] = useState(data)

    //estado da paginação
    const itemPerPage = 12
    const [state, setState] = useState({
        currentPage: 1,
        itemPerPage,
        totalPage: 0,
        setTotalPage(array){
            this.totalPage = Math.ceil(array.length / this.itemPerPage)
        }
        
    })

    //atualiza totalPage
    state.setTotalPage(processedData)


    //função de busca
    function searchFunction(wordToSearch) {
        const word =  wordToSearch.toLowerCase()

        let result = data.filter((value) => {
            let valueLowerCase = value.name.toLowerCase()
            return valueLowerCase.includes(word)
        })
            
        setProcessedData(result)

    }


    //definindo ponto de corte
    var page = state?.currentPage - 1;
    var start = page * state?.itemPerPage;
    var end = start + state?.itemPerPage

   //filtro dos dados
    function update(start, end) {
        const paginatedItems = processedData.slice(start, end)
        return paginatedItems
      
    }

    function formatterDate(date) {
        const stringToDate = new Date(date)
        const prepare = Intl.DateTimeFormat("pt-br",{dateStyle:'short'})
        const formatted = prepare.format(stringToDate)
        return formatted
    }
    
    return (
        <>
            <SearchBar searchFunction={searchFunction}/>
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

                <tbody>{
                    processedData.length == 0 ?
                    <tr>
                        <td colSpan={'4'}  className="text-center bg-slate-950">Nenhum resultado encontrado</td>
                    </tr> :
                    update(start, end).map((value, index) => (
                        <tr key={index} className="hover:bg-gray-900 cursor-pointer">
                            <td className="pt-1.5 pb-1.5 text-center">{value.name}</td>
                            <td className="pt-1.5 pb-1.5 text-center">{value.email}</td>
                            <td className="pt-1.5 pb-1.5 text-center">{formatterDate(value.created_at)}</td>
                            <td className="pt-1.5 pb-1.5 text-center">
                                <Svg color='#3de073' className='mr-4 w-6 h-6' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'/>

                                <Svg color='#ca1a26' className='w-6 h-6' d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'/>
                            </td>                          
                        </tr>
                    ))

                }
                    
                </tbody>
            </table>
            <Pagination 
                setState={setState} 
                state={state} 
                update={update} 
                totalResults={processedData.length == 0 ? 0 : processedData.length} 
                start={processedData.length == 0 ? -1 : start} 
                end={processedData.length == 0 ? 0 : end}/>
        </>

        
    )
}

