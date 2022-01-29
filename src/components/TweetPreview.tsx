import { Card, Col, Container, Figure, Row } from 'react-bootstrap';
import { GetTweetText, GetUrl } from '../api/Utils';
import { GITHUB_PAGES_URL, Props } from '../types/Defs';

function ToolAppTwitterCard(props: Props) {
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
            <Card.Title>スト5ラウンジ募集ツール</Card.Title>
            <Card.Text>
              ラウンジ募集のTweetを作成するツール。スマホで入力しやすく、保存ができます。
            </Card.Text>
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