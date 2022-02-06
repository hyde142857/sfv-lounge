import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { loadColorMode, saveColorMode } from '../api/Utils';
import MainAppPage from './MainAppPage';

const ColorModeContext = createContext({ toggleColorMode: () => { /* do nothing */ } });

export function ToggleColorModePage() {
  const [mode, setMode] = useState<'light' | 'dark'>(loadColorMode());
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  saveColorMode(mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MainAppPage palettemode={mode} onClickColorMode={colorMode.toggleColorMode}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}