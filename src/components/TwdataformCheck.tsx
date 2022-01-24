import { Form } from 'react-bootstrap';
import { string2boolean } from '../api/Utils';
import { TweetData } from '../types/Defs';

export type TwdataformCheckProps = {
  label: string;
  comment?: string;
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
}

function TwdataformCheck(props: TwdataformCheckProps) {
  const comment = props.comment || "";
  return (
    <Form.Group className="mb-3">
      <Form.Check
        type="checkbox"
        id={props.twdataKey}
        label={props.label + comment}
        checked={string2boolean(props.twdata.attachToolUrl, true)}
        onChange={
          e => { props.updateTwdata(props.twdataKey, String(e.target.checked)); }
        }
      />
    </Form.Group>
  )
}

export default TwdataformCheck;
