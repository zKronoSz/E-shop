import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './components/**/*.{js,ts,jsx,tsx}', // Adiciona os componentes da pasta components para serem escaneados
        './lib/**/*.{js,ts,jsx,tsx}', // Adiciona a pasta lib para as funções utilitárias
    ],

    theme: {
        extend: {
            // Gradientes personalizados
            backgroundImage: {
                'custom-gradient': "radial-gradient(circle farthest-side at 0 100%,#00ccb1,transparent),radial-gradient(circle farthest-side at 100% 0,#7b61ff,transparent),radial-gradient(circle farthest-side at 100% 100%,#ffc414,transparent),radial-gradient(circle farthest-side at 0 0,#1ca0fb,#141316)",
            },
            // Animações
            animation: {
                'gradient-animate': 'backgroundPosition 5s infinite reverse',
            },
            keyframes: {
                backgroundPosition: {
                    '0%': { backgroundPosition: '0 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
    ],
};
