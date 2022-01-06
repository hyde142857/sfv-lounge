import { Card } from 'react-bootstrap';
import { GetTweetText } from '../api/Utils'
import { Props } from '../types/Defs'

function TweetPreview(props: Props) {
  return (
    <>
      <Card border="primary">
        <Card.Body>
          <pre>
            {GetTweetText(props.twdata)}
          </pre>
        </Card.Body>
      </Card>
    </>);
}

export default TweetPreview;