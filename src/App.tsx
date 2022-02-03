import 'bootstrap/dist/css/bootstrap.min.css';
import TweetFormPage from './pages/TweetFormPage';
import { CheckLiveTweetButton, RequestButton } from './components';
import { AppBar, Container, createTheme, CssBaseline, IconButton, PaletteMode, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface MainAppProps {
  toggleColorMode: () => void,
  palettemode: PaletteMode,
}

function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MainApp palettemode={mode} toggleColorMode={colorMode.toggleColorMode}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function MainApp(props:MainAppProps) {
  return (<>
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          スト5ラウンジ募集ツール
        </Typography>
        <div>
        <IconButton sx={{ ml: 1 }} onClick={props.toggleColorMode} color="inherit">
          {props.palettemode === 'dark' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    <br />
    <Container>
      <TweetFormPage />
    </Container>
    <Container>
      <hr />
      <CheckLiveTweetButton />
    </Container>
    <Container>
      <hr />
      <RequestButton />
    </Container>
    <div className="footer-copyright text-center py-3">© 2021-2022 Copyright:
      Hyde (Twitter:<a href="https://twitter.com/hyde142857">Follow @hyde142857</a>)
    </div>
  </>);
}

function App() {
  return (<ToggleColorMode />);
}

export default App;
