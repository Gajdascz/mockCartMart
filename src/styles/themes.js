const common = {
  fonts: {
    main: "atkinson-hl",
  },
  spacing: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
  },
  text: {
    primary: (base) => `${base}${toHexTransparency(87)}`,
    secondary: (base) => `${base}${toHexTransparency(60)}`,
    disabled: (base) => `${base}${toHexTransparency(38)}`,
  },
};

const toHexTransparency = (percentage) => {
  if (percentage < 0 || percentage > 100) {
    throw new Error(`Percentage must be between 0 and 100`);
  }
  const alpha = Math.round((percentage / 100) * 255);
  return alpha.toString(16).padStart(2, 0).toUpperCase();
};

const getSurfaces = (base) =>
  [0, 5, 7, 8, 9, 11, 12, 14, 15, 16].map(
    (percent) => `${base}${toHexTransparency(percent)}`,
  );

const light = {
  ...common,
  colors: {
    background: "#ffffff",
    primary: "#6200EE",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    error: "#B00020",
    surface: getSurfaces(`#000000`),
    on: {
      primary: "#ffffff",
      secondary: "#000000",
      background: "#000000",
      surface: "#000000",
      error: "#ffffff",
    },
  },
};

const dark = {
  ...common,
  colors: {
    background: "#121212",
    primary: "#BB86FC",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    error: "#CF6679",
    surface: getSurfaces(`#FFFFFF`),
    on: {
      primary: "#000000",
      secondary: "#000000",
      background: "#ffffff",
      surface: "#ffffff",
      error: "#000000",
    },
    states: {
      surface: {},
    },
  },
};

export { light, dark };
