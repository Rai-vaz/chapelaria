import { useState } from "react"
import GuestLayout from "@/Layouts/GuestLayout"
import { Head, router, Link } from "@inertiajs/react"
import InputLabel from "@/Components/InputLabel"
import InputError from "@/Components/InputError"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm } from 'react-hook-form'
import axios from "axios"
import Alert from '@/Components/Alert'
import Svg from "@/Components/Svg"


export default function NewUser({roles}) {

    var url = import.meta.env.VITE_APP_URL

    const [validateEmail, setValidateEmail] = useState(false)
    const [erroRegister, setErroRegister] = useState(false)
    const [showPassword, setShowPassWord] = useState(false)

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
            textStrong={' tente mais tarde'}

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

                    <div className="mt-3 relative">
                        <InputLabel
                            value={'Senha'}
                        />
                        <TextInput
                            className='w-full'
                            type={!showPassword ? 'password' : 'text'}
                            {...register('password', {required: true, minLength: 8})}
                        />
                        {
                            watchPassword !== '' &&
                            <Svg 
                                path={
                            
                                    showPassword ? 
                                    <>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </>
                                    :                                    
                                        <>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </> 
                                    
                                }

                                className={'w-6 absolute top-[33px] right-3'}

                                onClick={() => setShowPassWord(!showPassword)}
                            />
                        }
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

                    <div className="mt-5 flex justify-between">
                        <Link href={route('login')} className="text-white opacity-70 hover:opacity-100">
                            Já tenho cadastro
                        </Link>
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
