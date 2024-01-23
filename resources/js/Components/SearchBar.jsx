import TextInput from "@/Components/TextInput"
import Svg from '@/Components/Svg'
import { useState } from "react"


export default function SearchBar({searchFunction}) {
    const [wordToSearch, setWordToSearch] = useState('')
    

    function handleClick(e, toSearch, clearSearch) {
        e.preventDefault()
        searchFunction(toSearch)
        clearSearch && setWordToSearch('')
    }


    return (
        <form className="bg-gray-900">
            <div className="h-[3.5rem] py-2 flex justify-end relative">                
                <TextInput
                    placeholder='Pesquisa por nome'
                    className='w-60 border-r-0 rounded-tr-none rounded-br-none focus:ring-0 focus:border-r-[1px]' 
                    onChange={(e) => setWordToSearch(e.target.value)}
                    value={wordToSearch}
                   
                />
                <button
                    onClick={(e) => handleClick(e, '', true) }
                >
                    <Svg
                        d='M6 18 18 6M6 6l12 12'
                        color='white'
                        className={'h-[50%] bg-red-700 p-1 rounded-sm absolute top-[14px] right-[55px] animate-pulse ' + (!wordToSearch && 'hidden')}
                    />
                </button>


                <button
                    onClick={(e) => handleClick(e, wordToSearch, false)}
                >
                    <Svg
                        d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                        color='white'
                        className='h-[100%] w-[50px] p-2 border border-gray-700 border-l-0 rounded-tr-md rounded-br-md hover:border-indigo-600'                    
                    />
                </button>
               
            </div>
        </form>
    )
}