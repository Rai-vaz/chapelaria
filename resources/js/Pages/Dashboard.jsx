import { Head } from '@inertiajs/react';




export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            
            <div>teste</div>
        </AuthenticatedLayout>
        
    );
}
    
        
            

        
        
