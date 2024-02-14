import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Dashboard from './Pages/Dashboard';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';



createInertiaApp({ 
    title: (title) => `${title} - ${appName}`,
    
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx'))
        .then((page) => {    
            
            if (name == 'Guest/NewUser' || name == 'Auth/Login' || name == 'Dashboard' || name == 'Auth/ForgotPassword') {
                return page
            }       
           
            page.default.layout = page.default.layout || (page => <Dashboard user='' children={page} />)
            return page  
           
        })
    ,
    setup({ el, App, props}) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },      

    progress: {
        color: '#4B5563',
    },
           
});




