const SEMANTIC_ERROR = '#FF385C';

/** Базовая палитра (design tokens). */
export const colors = {
  background: {
    primary: '#F5F6FA',
    accent: '#CFFF57',
    reduced: '#FFFFFF',
    surface: '#FFFFFF',
  },
  text: {
    primary: '#0A0A10E6',
    secondary: '#0A0A1099',
    dark: '#0A0A10',
    accent: '#4A6000',
  },
  semantic: {
    error: SEMANTIC_ERROR,
  },
  gradient: {
    start: SEMANTIC_ERROR,
    end: '#F5F6FA',
  },
} as const;
