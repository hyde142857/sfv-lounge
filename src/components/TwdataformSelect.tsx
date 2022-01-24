import { Form } from "react-bootstrap";
import { TweetData } from "../types/Defs";

export type TwdataformSelectProps = {
  label: string;
  options: string[];
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
}

function TwdataformSelect(props: TwdataformSelectProps) {
  return (
    <Form.Group className="mb-3" controlId={props.label}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Select
        value={props.twdata[props.twdataKey]}
        onChange={
          e => { props.updateTwdata(props.twdataKey, e.target.value); }
        } >
        {
          props.options.map((opt) => <option key={opt}>{opt}</option>)
        }
      </Form.Select>
    </Form.Group>
  );
}

export default TwdataformSelect;
