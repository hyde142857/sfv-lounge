import {
  Box, Container, CssBaseline, Grid, PaletteMode
} from '@mui/material';
import { CheckLiveTweetButton, RequestButton, Copyright, TitleBar } from '../components';
import TweetFormPage from './TweetFormPage';

interface MainAppPageProps {
  onClickColorMode: () => void;
  palettemode: PaletteMode;
}

export default function MainAppPage(props: MainAppPageProps) {
  return (<>
    <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>
      <TitleBar onClickColorMode={props.onClickColorMode} palettemode={props.palettemode} />
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
      <Copyright />
    </Container>
  </>);
}
