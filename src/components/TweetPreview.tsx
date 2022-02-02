import { Card, Col, Container, Figure, Row } from 'react-bootstrap';
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
  return (<Card border="secoundary">
    <Card.Body>
      <Container>
        <Row>
          <Col xs="auto">
            <Figure.Image
              width={144}
              height={144}
              alt="171x180"
              src={imgurl}
            />
          </Col>
          <Col>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Col>
        </Row>
      </Container>
    </Card.Body>
  </Card>);
}

function TweetPreview(props: Props) {
  const toolUrl: boolean = (props.twdata.url === "" && string2boolean(props.twdata.attachToolUrl, true));
  return (
    <>
      <Card border="primary">
        <Card.Body>
          <pre>
            {GetTweetText(props.twdata)}
            {!toolUrl && GetUrl(props.twdata)}
          </pre>
          {toolUrl && (<ToolAppTwitterCard twdata={props.twdata} />)}
        </Card.Body>
      </Card>
    </>);
}

export default TweetPreview;