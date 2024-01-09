import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import OverView from './OverView';




export default function Dashboard({ auth }) {
    localStorage.setItem('user', auth.user.name)
    return (
        <AuthenticatedLayout
            user={localStorage.getItem('user')}
        >
            <Head title="Dashboard" />

            
            <OverView/>
        </AuthenticatedLayout>
        
    );
}
    
        
            

        
        
