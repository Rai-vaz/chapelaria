import { Head } from "@inertiajs/react"
import { useDispatch } from 'react-redux'
import {changeUser} from '../redux/useSlice';




const OverView = ({auth}) => {
    const dispatch = useDispatch();

    dispatch(changeUser(auth.user.name))

    return (
        <>
        <Head title='Over View'/>
        <h1>Página over view</h1>

        </>
        
    )
}

export default OverView