
import { useState } from "react"
import GuestLayout from "@/Layouts/GuestLayout"
import { Head, router } from "@inertiajs/react"
import InputLabel from "@/Components/InputLabel"
import InputError from "@/Components/InputError"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm } from 'react-hook-form'
import axios from "axios"
import Alert from '@/Components/Alert'


export default function NewUser({roles}) {

    var url = import.meta.env.VITE_APP_URL

 
    const [validateEmail, setValidateEmail] = useState(false)
    const [erroRegister, setErroRegister] = useState(false)

    const {register, handleSubmit, watch, formState : {errors}} = useForm({
        type: '',
        name: '',
        email: '',
        password:'',
    })

    function onSubmit(data) {
        axios.post(url + '/register', data)
        .then((response) => {
            router.get('/dashboard')
        })
        .catch((erro) => {

            if (erro.response.status == 500 || erro.response.data.message != 'The email has already been taken.' ) {
                setErroRegister(true) 
                setTimeout(() => setErroRegister(false), 4000)

            }else{    

                setValidateEmail(true)
            }

        })
        
    }

    const watchPassword = watch('password')


    return (
        <>
        <Alert 
            show={{erro : erroRegister}}
            text={'Não foi possível realizar o seu cadastro'}
            textStrong={'tente mais tarde'}

        />
        <GuestLayout>
            <Head title="Novo usuário"/>
            

            <div>
                <form>

                    <div>
                        <InputLabel
                            value={'Tipo de usuário'}
                        />
                        <select 
                            className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            defaultValue = ''
                            {...register('type', {required: true})}
                        >
                            <option value='' disabled hidden>Selecione o tipo de usuário</option>
                            {
                                roles.map((value, index ) => (
                                    <option key={index} value={index + 1}>{value.type}</option>
                                ))
                            }

                        </select>
                        {errors.type?.type == 'required' && <InputError message='Selecione o tipo de usuário'/> }
                    </div>

                    <div className="mt-3">
                        <InputLabel
                            value={'Nome'}
                        />
                        <TextInput
                            className='w-full'
                            {...register('name',{required: true})}
                        />
                        {errors.name?.type == 'required' && <InputError message='Campo obrigatório'/> }
                    </div>

                    <div className="mt-3">
                        <InputLabel
                            value={'Email'}
                        />
                        <TextInput
                            className='w-full'
                            type='email'
                            {...register('email',{
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                }
                            })}
                        />
                        {errors.email?.type == 'required' ? <InputError message='Campo obrigatório'/> : errors.email?.type == 'pattern' && <InputError message='Email inválido'/>}
                        {validateEmail && <InputError message='Email já cadastrado'/>}
                    </div>

                    <div className="mt-3">
                        <InputLabel
                            value={'Senha'}
                        />
                        <TextInput
                            className='w-full'
                            type='password'
                            {...register('password', {required: true, minLength: 8})}
                        />
                        {errors.password?.type == 'required' ? <InputError message='Campo obrigatório'/> : errors.password?.type == 'minLength' && <InputError message='A senha deve conter ao menos 8 caracteres '/> }
                    </div>

                    <div className="mt-3">
                        <InputLabel
                            value={'Confirme a senha'}
                        />
                        <TextInput
                            className='w-full'
                            type='password'
                            {...register('password_confirmation', {
                                required: true, 
                                minLength: 8,
                                validate: (value) => value == watchPassword
                            })}
                        />
                        {errors.password_confirmation?.type == 'required' ? <InputError message='Campo obrigatório'/> : errors.password_confirmation?.type == 'minLength' ? <InputError message='A senha deve conter ao menos 8 caracteres'/> : errors.password_confirmation?.type == 'validate' && <InputError message='Senhas não conferem'/> }
                    </div>

                    <div className="mt-5 flex justify-end">
                        <PrimaryButton 
                            onClick={(e) => {
                                e.preventDefault()
                               handleSubmit(onSubmit)()
                                
                            }}>
                            Cadastrar
                        </PrimaryButton>
                    </div>

                </form>            
            </div>
        
        
        </GuestLayout>
        </>
    )
}
