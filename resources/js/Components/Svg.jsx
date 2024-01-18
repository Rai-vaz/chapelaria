export default function Svg({d, color, margin}){
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke={color}
            className={'w-6 h-6 cursor-pointer inline'}
            
        >
            <path strokeLinecap="round" strokeLinejoin="round" d={d}/>
            
        </svg>
    )
}