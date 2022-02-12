import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import { GetImgPath, GetTweetText, GetUrl, string2boolean, ThisPageGetDesc, ThisPageGetTitle } from '../api/Utils';
import { Props } from '../types/Defs';

function ToolAppTwitterCard(props: Props) {
  const title = ThisPageGetTitle();
  const desc = ThisPageGetDesc();
  let imgurl = 'ogimage_summary.png';
  const path = GetImgPath(props.twdata);
  if (path !== '') {
      imgurl = path + '.png';
  }
  return (<>
    <Grid item xs={3}>
      <Card variant='outlined' sx={{ maxWidth: 140 }}>
        <CardMedia
          component='img'
          alt='cardimage'
          image={imgurl}
        />
      </Card>
    </Grid>
    <Grid item xs={9}>
      <Typography gutterBottom variant='h5' component='div'>
        {title}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {desc}
      </Typography>
    </Grid>
  </>
  );
}

function TweetPreview(props: Props) {
  const toolUrl: boolean = (props.twdata.url === '' && string2boolean(props.twdata.attachToolUrl, true));
  return (
    <>
      <Container>
        <Grid item xs={12}>
          {GetTweetText(props.twdata).split('\n').map((itm, i) => (
            <div key={'preview-text-' + String(i)}>
              {itm} <br key={'preview-br-' + String(i)} />
            </div>
          ))}
          <div key='preview-url-'>{!toolUrl && GetUrl(props.twdata)}</div>
        </Grid>
      </Container>
      {toolUrl && (<ToolAppTwitterCard twdata={props.twdata} />)}
    </>);
}

export default TweetPreview;
