import { Head } from "@inertiajs/react"
import { HeaderPage } from "@/Components/HeaderPage"
import Svg from "@/Components/Svg"

export default function MostrarEventos() {


    return (

        <div>
            <Head title="Chapelarias"/>
            <HeaderPage 
                icon={
                    <Svg
                        d={'M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z'}
                        
                    />
                }

                title={'Chapelarias'}
                link={'Nova chapelaria'}
                href={route('chapelarias.cadastrar')}
            />

        </div>
        
    )
}

