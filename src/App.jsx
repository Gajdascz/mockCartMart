import { light, dark } from "./styles/themes";
import { ThemeProvider } from "styled-components";

import { useState } from "react";
function App() {
  const [theme, setTheme] = useState(light);

  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
