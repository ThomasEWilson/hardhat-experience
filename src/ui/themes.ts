export const themes = {
  light: {
    primary: '#F4A261',
    text: 'white',
    footerBackground: '#f6f6f6',
  },
} as const;

export type Theme = typeof themes.light;
