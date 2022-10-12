import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@src-root': path.resolve(__dirname, './src/root'),
            '@src-assets': path.resolve(__dirname, './src/assets'),
            '@src-components': path.resolve(__dirname, './src/components'),
            '@src-context': path.resolve(__dirname, './src/context'),
            '@src-data': path.resolve(__dirname, './src/data'),
            '@src-features': path.resolve(__dirname, './src/features'),
            '@src-hooks': path.resolve(__dirname, './src/hooks'),
            '@src-layouts': path.resolve(__dirname, './src/layouts'),
            '@src-lib': path.resolve(__dirname, './src/lib'),
            '@src-pages': path.resolve(__dirname, './src/pages'),
            '@src-services': path.resolve(__dirname, './src/services'),
            '@src-utils': path.resolve(__dirname, './src/utils')
        }
    },
    plugins: [react()]
});
