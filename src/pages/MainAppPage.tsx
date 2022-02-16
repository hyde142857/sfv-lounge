import {
  Box, Container, CssBaseline, Grid, PaletteMode, styled
} from '@mui/material';
import { CheckLiveTweetButton, RequestButton, Copyright, TitleBar, CheckTweetBotButton } from '../components';
import TweetFormPage from './TweetFormPage';

interface MainAppPageProps {
  onClickColorMode: () => void;
  palettemode: PaletteMode;
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function MainAppPage(props: MainAppPageProps) {
  return (<>
    <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>
      <TitleBar onClickColorMode={props.onClickColorMode} palettemode={props.palettemode} />
    </Box>
    <Offset />
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
          <CheckTweetBotButton />
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
