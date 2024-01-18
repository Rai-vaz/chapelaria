import GuestLayout from '@/Layouts/GuestLayout';
import FormUser from '@/Components/FormUser';


export default function Register() {
   
    return (
        <GuestLayout btnRegister={false}>
            <FormUser rote='register'/>
        </GuestLayout>

    );
}
