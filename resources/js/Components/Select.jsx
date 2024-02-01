

export default function Select({defaultValue, placeholder, option, setData, className, ...props}) {

    function handleChange(e) {
       setData && setData('type', e.target.value)
    }

    return (
        <select 
            {...props}
            className={'w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300  dark:focus:border-indigo-600 dark:focus:ring-indigo-600 rounded-md shadow-sm cursor-pointer' + className}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e)}
           
        > 
            <option value={''} hidden disabled>{placeholder}</option>
            
            { 
                option.map((value, key) => (
                    <option value={key + 1} key={key}>{value.type}</option>
                ))
            }
        </select>
    )
}