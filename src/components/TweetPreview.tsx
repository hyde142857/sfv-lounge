import { Card, Col, Container, Figure, Row } from 'react-bootstrap';
import { GetTweetText, GetUrl } from '../api/Utils';
import { GITHUB_PAGES_URL, Props } from '../types/Defs';

function ToolAppTwitterCard(props: Props) {
  const title_obj = document.querySelector('meta[property="og:title"]');
  const title = title_obj ? title_obj.getAttribute('content') : "";
  const desc_obj = document.querySelector('meta[property="og:description"]');
  const desc = desc_obj ? desc_obj.getAttribute('content') : "";
  return (<Card border="secoundary">
    <Card.Body>
      <Container>
        <Row>
          <Col xs={2}>
            <Figure.Image
              width={144}
              height={144}
              alt="171x180"
              src="ogimage_summary.png"
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
  const toolUrl: boolean = GetUrl(props.twdata) === GITHUB_PAGES_URL;
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