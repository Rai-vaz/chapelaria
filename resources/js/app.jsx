import './bootstrap';
import '../css/app.css';
import { useEffect } from 'react';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import Dashboard from './Pages/Dashboard';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';



createInertiaApp({

    
    title: (title) => `${title} - ${appName}`,
    
    resolve: (name) =>  resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')).then((page) => {

        if (name == 'Welcome' || name == 'Auth/Login') {
            return page
        }

        if (name == 'Dashboard') {
            return page
        }
      
        page.default.layout = page.default.layout || (page => <Dashboard user={''} children={page} />)
        return page  
    }),

    setup({ el, App, props}) {
        const root = createRoot(el);
        root.render(<App {...props} />);

    },
      

    progress: {
        color: '#4B5563',
    },
           
});




