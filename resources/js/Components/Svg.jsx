export default function Svg({d, color = 'white', className, strokeWidth = 2, viewBox = '0 0 24 24', path, ...props}){
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox={viewBox}
            strokeWidth={strokeWidth}
            stroke={color}
            className={'cursor-pointer inline ' + className}
           {...props}
            
        >
            {
                path ? path : <path strokeLinecap="round" strokeLinejoin="round" d={d}/>
            }
            
            
        </svg>
    )
}