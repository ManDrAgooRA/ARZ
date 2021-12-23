export const THEME = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    colors: {
      focus: 'transparent',
    },
  },
  card: {
    hover: {
      container: {
        elevation: 'large',
      },
    },
  },
};

export const FILTERS = [{ name: 'categories' }, { name: 'countries' }];
export const LINKS = {
  signUp: '/signUp',
  login: '/login',
};

export const EMAIL_MASK = [
  { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
  { fixed: '@' },
  { regexp: /^[\w]+$/, placeholder: 'my' },
  { fixed: '.' },
  { regexp: /^[\w]+$/, placeholder: 'com' },
];
