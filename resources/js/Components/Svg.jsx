export default function Svg({d, color, className}){
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke={color}
            className={'cursor-pointer inline ' + className}
            
        >
            <path strokeLinecap="round" strokeLinejoin="round" d={d}/>
            
        </svg>
    )
}