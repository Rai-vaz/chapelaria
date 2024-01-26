

export default function Alert({text, textStrong, type, show}) {

   const verify = Object.values(show).some((value) => value == true)
   

    return (
        <div className={"rounded-tr-md rounded-tl-md transition-all duration-700 "  +  (
            type == 'sucesso' ? 'bg-green-700 text-green-300' : 
            type == 'erro' ? 'bg-red-700 text-red-300' :
            'bg-orange-700 text-orange-300' ) + (verify ? ' p-2 h-[40px] ' : ' p-0 h-[0] ' ) }
            
        >

            <p className={'duration-300 ' + (verify ? ' opacity-1 delay-700' : ' opacity-0 delay-0')}>
                {text} <strong className={type == 'sucesso' ? "text-green-200" : type == 'erro' ? 'text-red-200' : 'text-orange-200'}>{textStrong}</strong>
            </p>
 
        </div>
    )
}