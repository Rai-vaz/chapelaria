import { Head } from "@inertiajs/react"
const OverView = (props) => {
    console.log(props.auth.user.name)

    return (
        <>
        <Head title='Over View'/>
        <h1>Página over view</h1>

        </>
        
    )
}

export default OverView