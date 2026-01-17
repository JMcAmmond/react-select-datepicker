export default {
  // Vite configuration for Storybook
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
};
