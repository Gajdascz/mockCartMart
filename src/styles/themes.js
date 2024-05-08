const common = {
  textOpacity: {
    primary: `DE`,
    secondary: `99`,
    disabled: `61`,
  },
};

const light = {
  ...common,
  colors: {
    primary: '#6200EE',
    primaryVariant: '#3700B3',
    secondary: '#03DAC6',
    error: '#B00020',
    border: '#E0E0E0',
    on: {
      primary: '#ffffff',
      secondary: '#000000',
      surface: '#000000',
      error: '#ffffff',
    },
  },
  surface: [
    {
      color: 'rgba(255, 255, 255, 1)',
      shadow: 'none',
    },
    {
      color: 'rgba(247,247,247,0.95)',
      shadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
    {
      color: 'rgba(247,247,247, 0.9)',
      shadow: '0 2px 4px rgba(0, 0, 0, 0.12)',
    },
    {
      color: 'rgba(247,247,247, 0.85)',
      shadow: '0 3px 5px rgba(0, 0, 0, 0.16)',
    },
    {
      color: 'rgba(247,247,247, 0.8)',
      shadow: '0 4px 6px rgba(0, 0, 0, 0.22)',
    },
    {
      color: 'rgba(247,247,247, 0.75)',
      shadow: '0 5px 7px rgba(0, 0, 0, 0.28)',
    },
  ],
};

const dark = {
  ...common,
  colors: {
    primary: '#BB86FC',
    primaryVariant: '#3700B3',
    secondary: '#03DAC6',
    error: '#CF6679',

    border: '#383838',
    on: {
      primary: '#000000',
      secondary: '#000000',
      surface: '#ffffff',
      error: '#000000',
    },
  },
  surface: [
    {
      color: 'rgba(18, 18, 18, 1)',
      shadow: 'none',
    },
    {
      color: 'rgba(26,26,26,0.95)',
      shadow: '0 1px 2px rgba(75,75,75, 0.06)',
    },
    {
      color: 'rgba(26,26,26, 0.9)',
      shadow: '0 2px 4px rgba(75,75,75, 0.12)',
    },
    {
      color: 'rgba(26,26,26, 0.85)',
      shadow: '0 3px 5px rgba(75,75,75, 0.16)',
    },
    {
      color: 'rgba(26,26,26, 0.8)',
      shadow: '0 4px 6px rgba(75,75,75, 0.22)',
    },
    {
      color: 'rgba(26,26,26, 0.75)',
      shadow: '0 5px 7px rgba(75,75,75, 0.28)',
    },
  ],
};

export { light, dark };
