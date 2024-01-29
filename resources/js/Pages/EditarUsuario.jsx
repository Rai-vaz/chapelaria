import { Head }from "@inertiajs/react"
import InputLabel from "@/Components/InputLabel"
import InputError from "@/Components/InputError"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm } from "react-hook-form"
import axios from "axios"
import {router} from '@inertiajs/react'
import { HeaderPage } from "@/Components/HeaderPage"
import { useState } from "react"
import Alert from "@/Components/Alert"



export default function EditarUsuario({data, id}) {
    const {register, handleSubmit, formState: {errors}} = useForm({
        name : '',
        email: ''
    })

    const [showAlert, setShowAlert] = useState({
        sucesso : false,
        erro : false,
        warning: false
    })

    function onSubmit(data) {
        
        axios.patch('http://127.0.0.1:8000/usuarios/editar/'+id, data)
        .then(() => {
            setShowAlert({...showAlert, sucesso: true})

            setTimeout(() => {
                setShowAlert({...showAlert, sucesso: false})
                router.get('/usuarios')
            }, 4000);
            

        }).catch(() => {
            setShowAlert({...showAlert, erro: true})
            setTimeout(() => {
                setShowAlert({...showAlert, erro: false})
                
            }, 4000);
        })
        
    }


    return (
        <>
            <Head title= "Editar usuário"/>
            <HeaderPage
                iconD='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                title='Editar usuário'
                link='Listar usuários'
                href='/usuarios'
            />
            <Alert 
                text= {showAlert.sucesso ? 'Usuário editado com' : 'Não foi possível editar o usuário '} 
                textStrong={showAlert.sucesso ? ' sucesso' : 'tente novamente'} 
                show={showAlert}

            />
            <div className="text-center">
                <form className="w-[60%] inline-block">
                    <div className="text-left mt-5">
                        <InputLabel value='Nome' htmlFor='name'/>
                        <TextInput
                            id='name'
                            defaultValue={data.name}
                            {...register('name', {required: true})}
                            className={'mt-1 block w-full ' + (errors?.name?.type == 'required' && 'dark:focus:border-red-500 dark:focus:ring-red-500')}
                        />
                        <InputError
                            message={errors?.name?.type == 'required' && 'Campo obrigatório'}
                        />
                    </div>
                    <div className="text-left mt-5">
                        <InputLabel value='Email' htmlFor='email'/>
                        <TextInput
                            id='email'
                            defaultValue={data.email}
                            {...register('email', {required: true})}
                            className={'mt-1 block w-full ' + (errors?.email?.type == 'required' && 'dark:focus:border-red-500 dark:focus:ring-red-500')}
                        />
                        <InputError
                            message={errors?.email?.type == 'required' && 'Campo obrigatório'}
                        />
                    </div>
                    <div className="flex justify-end mt-3">
                        <PrimaryButton
                            onClick={(e) => {
                                e.preventDefault()
                                handleSubmit(onSubmit)()
                            }}
                        >
                            Salvar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    )
}