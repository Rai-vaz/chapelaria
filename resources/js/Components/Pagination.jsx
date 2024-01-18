import Svg from "@/Components/Svg"



export default function Pagination({setState, state, update, totalResults, start, end}) {
    const maxVisible = 5;
    const Buttons = {
        //botões esquerdos e direitos
        changeButton() {
            let numberLeft = state.currentPage - Math.floor(maxVisible / 2)
            let numberRight = state.currentPage + Math.floor(maxVisible / 2)
            if (numberLeft < 1) {
                numberLeft = 1
                numberRight = 5
            }

            if (numberRight > state.totalPage) {
                numberLeft = state.totalPage - (maxVisible - 1)
                numberRight = state.totalPage
                if (numberLeft < 1)   numberLeft = 1                
            }

            return {numberLeft, numberRight}
        },

        //criação dos botões
        update(){
            const {numberLeft, numberRight} = this.changeButton()
            let buttonPage = []
            for (let page = numberLeft; page <= numberRight; page++) {
                buttonPage.push(page)                
            }
            return buttonPage
        }
    }


   //controles da paginação
    const controls = {
        next(){
            if (state.currentPage == state.totalPage) {
                return
            }
            setState({...state, currentPage: state.currentPage + 1 })
            update()            
        },

        prev(){
            if (state.currentPage == 1) {
                return
            }
            setState({...state, currentPage: state.currentPage - 1})
            update()           
        },

        goTo(page){
            setState({...state, currentPage: page})
        }
    }

   
    

    return(
       <div className="flex justify-between bg-header-color rounded-br-md ">
            <div id="resume" className="flex items-center ml-4">
                <p className="text-sm">
                    Mostrando de
                    <span className="m-2">{start + 1}</span>
                    a
                    <span className="m-2">{state.currentPage == state.totalPage ? totalResults : end}</span>
                    de
                    <span className="m-2">{totalResults}</span>
                    resultados
                </p>
            </div>
            <div id="controls" className="flex">
                <button className="border-2 border-r-0  border-custom-color-light-blue rounded-tl-md rounded-bl-md px-4 hover:bg-slate-800 transition delay-50 text-sm"
                    onClick={() => controls.goTo(1)}
                >
                    Primeira
                </button>
                <button
                    className="flex h-8 w-8 border-2 border-r-0 border-custom-color-light-blue justify-center items-center hover:bg-slate-800 transition delay-50"
                    onClick={() => controls.prev()}
                >
                    <Svg d='M15.75 19.5 8.25 12l7.5-7.5' color='#adf0ff'/>
                </button>
                {
                    Buttons.update().map((value,key) => (
                        
                        <button 
                            key={key} 
                            className={"h-8 w-8 border-2 border-r-0 border-custom-color-light-blue hover:bg-slate-800 transition delay-50 " +
                            (value == state.currentPage && 'bg-slate-800')}
                            onClick={() => controls.goTo(value)}
                        >
                            {value}
                        </button>
                    ))
                }
               
                <button 
                    className="flex h-8 w-8 border-2  border-custom-color-light-blue border-r-0 justify-center items-center hover:bg-slate-800 transition delay-50"
                    onClick={() => controls.next()}
                >
                    <Svg d='m8.25 4.5 7.5 7.5-7.5 7.5' color='#adf0ff'/>
                </button>
                <button className="border-2  border-custom-color-light-blue rounded-tr-md rounded-br-md px-4 hover:bg-slate-800 transition delay-50 text-sm"
                    onClick={() => controls.goTo(state.totalPage)}
                >
                    Última
                </button>
            </div>
       </div>
    )
}