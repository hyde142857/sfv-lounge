import { Form } from 'react-bootstrap';
import { TweetData } from '../types/Defs';

export type TwdataformTextProps = {
  label: string;
  comment?: string;
  isInvalid?: boolean;
  invalidFeedback?: string;
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
}

function TwdataformText(props: TwdataformTextProps) {
  const comment = props.comment || "";
  return (
    <Form.Group className="mb-3" controlId={props.label}>
      <Form.Label>{props.label}</Form.Label> <span>{comment}</span>
      <Form.Control
        type="text"
        onChange={
          e => { props.updateTwdata(props.twdataKey, e.target.value); }
        }
        value={props.twdata[props.twdataKey]}
        isInvalid={props.isInvalid} />
      <div className="invalid-feedback">{props.invalidFeedback}</div>
    </Form.Group>
  );
}

export default TwdataformText;
