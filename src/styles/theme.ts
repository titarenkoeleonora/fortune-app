export const theme = {
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '960px',
  },
  colors: {
    backgroundPrimary: '#f5f5f5',
    backgroundSecondary: '#ffffff',
    textPrimary: '#111827',
    textSecondary: '#9ca3af',
    shadowPrimary:
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
};

export type Theme = typeof theme;
