import { Button, Grid } from '@mui/material';
import { launchNewIssue, launchGithub } from '../api/Utils';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function RequestButton() {
  return (<>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button
          variant="contained" fullWidth size='large'
          startIcon={<TwitterIcon />}
          onClick={() => launchNewIssue()}
        >
          要望・問題
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained" color="info" fullWidth size='large'
          startIcon={<GitHubIcon />}
          onClick={() => launchGithub()}
        >
          GitHub
        </Button>
      </Grid>
    </Grid>
  </>
  );
}

export default RequestButton;
