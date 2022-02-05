import TweetFormPage from './pages/TweetFormPage';
import { CheckLiveTweetButton, RequestButton } from './components';
import { AppBar, Box, Container, createTheme, CssBaseline, Grid, IconButton, Link, PaletteMode, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import { loadColorMode, saveColorMode } from './api/Utils';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const ColorModeContext = createContext({ toggleColorMode: () => { /* do nothing */ } });

interface MainAppProps {
  onClickColorMode: () => void,
  palettemode: PaletteMode,
}

function ToggleColorMode() {
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
        <MainApp palettemode={mode} onClickColorMode={colorMode.toggleColorMode}/>
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
            <IconButton sx={{ ml: 1 }} onClick={props.onClickColorMode} color="inherit">
              {props.palettemode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
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
