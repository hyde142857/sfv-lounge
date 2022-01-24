import { Form } from 'react-bootstrap';
import { TweetData } from '../types/Defs';

export type TwdataformTextareaProps = {
  label: string;
  isInvalid?: boolean;
  invalidFeedback?: string;
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
}

function TwdataformTextarea(props: TwdataformTextareaProps) {
  return (
    <Form.Group className="mb-3" controlId={props.label}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as="textarea" rows={3}
        onChange={
          e => { props.updateTwdata(props.twdataKey, e.target.value); }
        }
        value={props.twdata[props.twdataKey]}
        isInvalid={props.isInvalid} />
      <div className="invalid-feedback">{props.invalidFeedback}</div>
    </Form.Group>
  );
}

export default TwdataformTextarea;
