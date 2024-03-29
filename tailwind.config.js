import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'custom-color-light-blue': '#adf0ff',
                'header-color': '#1f5155',
                'green-250': '#02907d',
                
            },

            stroke: {
                'lightGreen': '#c6ffac',
                'greenTheme': '#1f5155'
               
            }
        },
    },

    plugins: [forms],
};
