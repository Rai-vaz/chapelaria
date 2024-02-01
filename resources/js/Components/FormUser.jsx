import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';



export default function FormUser({alre, rote, dataForInput}) {
    console.log(dataForInput)
    alre = alre || false

    const { data, setData, post, processing, errors, reset } = useForm({
        type: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    console.log(data)


    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route(rote));
    };

    return (
        <>
            <Head title="Cadastro Usuário" />

            <form onSubmit={submit}>
                <div className='mt-4'>
                    <InputLabel value='Tipo de usuário'/>
                    <select 
                        className='w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300  dark:focus:border-indigo-600 dark:focus:ring-indigo-600 rounded-md shadow-sm'
                        defaultValue={data.type}
                        onChange={
                            (e) => setData('type', e.target.value)
                        }
                    >
                        <option value={''} hidden disabled>Selecione o tipo de usuário</option>
                        {
                            
                            dataForInput.map((value, key) => (
                                <option value={key + 1} key={key}>{value.type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                   {
                        !alre &&  
                        <Link
                            href={'/'}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </Link>
                   }

                    <PrimaryButton className='ms-4' disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}