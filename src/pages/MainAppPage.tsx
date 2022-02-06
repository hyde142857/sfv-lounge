import {
  AppBar, Box, Container, CssBaseline, Grid,
  IconButton, PaletteMode, Toolbar, Typography
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CheckLiveTweetButton, RequestButton, Copyright } from '../components';
import TweetFormPage from './TweetFormPage';

interface MainAppPageProps {
  onClickColorMode: () => void,
  palettemode: PaletteMode,
}

export default function MainAppPage(props: MainAppPageProps) {
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
    </Container>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CheckLiveTweetButton />
        </Grid>
        <Grid item xs={12}>
          <RequestButton />
        </Grid>
      </Grid>
    </Container>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  </>);
}
