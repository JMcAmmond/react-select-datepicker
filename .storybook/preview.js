export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: false,
  },

  docs: {
    codePanel: true
  }
}

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  :root, body, #storybook-root, #storybook-docs {
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('sb-fonts')) {
  const style = document.createElement('style');
  style.id = 'sb-fonts';
  style.textContent = fontStyles;
  document.head.appendChild(style);
}

export const decorators = [(Story) => Story()];