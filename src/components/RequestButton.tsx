import { Grid } from '@mui/material';
import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import { launchNewIssue, launchGithub } from '../api/Utils';

function RequestButton() {
  return (<>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TwitterLoginButton onClick={() => launchNewIssue()} >
          <span>要望・問題</span>
        </TwitterLoginButton>
      </Grid>
      <Grid item xs={6}>
        <GithubLoginButton onClick={() => launchGithub()} >
          <span>GitHub</span>
        </GithubLoginButton>
      </Grid>
    </Grid>
  </>
  );
}

export default RequestButton;
