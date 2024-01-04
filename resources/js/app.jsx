import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import Dashboard from './Pages/Dashboard';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Provider } from 'react-redux';
import store from '@/redux/store';


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
        page.default.layout = page.default.layout || (page => <Dashboard user='' children={page} />)
        return page  
    }),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        
        );
    },
    progress: {
        color: '#4B5563',
    },
           
    
});




