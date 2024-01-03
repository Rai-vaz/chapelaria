import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import Authenticated from './Layouts/AuthenticatedLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })    
        let page = pages[`./Pages/${name}.jsx`] 
        console.log(name)
        if (name == 'Welcome') {
            return page
        }
        page.default.layout = page.default.layout || (page => <Authenticated user='tt' children={page} />)
        return page   
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
    
});


