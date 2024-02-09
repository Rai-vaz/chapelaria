

export default function Alert({text, textStrong, show, className}) {

   const verify = Object.values(show).some((value) => value == true)

    
    return (
        <div 
            className={'transition-all duration-700 '  +  className + ' ' +(show.sucesso ? 'bg-green-700 text-green-300 ' : show.erro ? 'bg-red-700 text-red-300 ' : show.warning &&  'bg-orange-700 text-orange-300 ') + (verify ? ' p-2 h-[40px] ' : 'p-0 h-[0]') }
            
        >

            <p 
                className={'duration-200 ' +             
                    (show.sucesso ? 'text-green-300 ' : show.erro ? 'text-red-300 ' : 'text-orange-300 ')
                    + (verify ? 'delay-1000 opacity-1' : 'opacity-0')
                }
            >
                {text + ' '}
                <strong>{textStrong}</strong>
            </p>
 
        </div>
    )
}