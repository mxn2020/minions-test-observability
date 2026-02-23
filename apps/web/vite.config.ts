import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-test-observability/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/test-observability/, /node_modules/],
        },
    },
});
