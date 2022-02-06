import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import { GetLpRank, GetTweetText, GetUrl, string2boolean } from '../api/Utils';
import { Props } from '../types/Defs';

function ToolAppTwitterCard(props: Props) {
  const title_obj = document.querySelector('meta[property="og:title"]');
  const title = title_obj ? title_obj.getAttribute('content') : "";
  const desc_obj = document.querySelector('meta[property="og:description"]');
  const desc = desc_obj ? desc_obj.getAttribute('content') : "";
  const rank = GetLpRank(props.twdata.lp);
  let imgurl = "ogimage_summary.png";
  if (rank !== "") {
    imgurl = "rank/" + rank + ".png";
  }
  return (<>
    <Grid item xs={3}>
      <Card variant="outlined" sx={{ maxWidth: 140 }}>
        <CardMedia
          component="img"
          alt="cardimage"
          image={imgurl}
        />
      </Card>
    </Grid>
    <Grid item xs={9}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </Grid>
  </>
  );
}

function TweetPreview(props: Props) {
  const toolUrl: boolean = (props.twdata.url === "" && string2boolean(props.twdata.attachToolUrl, true));
  return (
    <>
      <Container>
        <Grid item xs={12}>
          {GetTweetText(props.twdata).split('\n').map((itm, i) => (<div key={'preview-text-' + String(i)}>{itm} <br key={"preview-br-" + String(i)} /></div>))}
          <div key='preview-url-'>{!toolUrl && GetUrl(props.twdata)}</div>
        </Grid>
      </Container>
      {toolUrl && (<ToolAppTwitterCard twdata={props.twdata} />)}
    </>);
}

export default TweetPreview;