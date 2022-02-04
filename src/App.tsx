import TweetFormPage from './pages/TweetFormPage';
import { CheckLiveTweetButton, RequestButton } from './components';
import { AppBar, Box, Container, createTheme, CssBaseline, Grid, IconButton, Link, PaletteMode, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const ColorModeContext = createContext({ toggleColorMode: () => { /* do nothing */ } });

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
    <Box sx={{ flexGrow: 1 }}>
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
    </Box>
    <br />
    <Container>
      <TweetFormPage />
      <hr />
    </Container>
    <Container>
      <CheckLiveTweetButton />
      <hr />
    </Container>
    <Container>
      <RequestButton />
    </Container>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://twitter.com/hyde142857">
              Hyde
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </>);
}

function App() {
  return (<ToggleColorMode />);
}

export default App;
