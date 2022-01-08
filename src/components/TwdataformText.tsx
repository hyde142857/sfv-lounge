import { Form } from 'react-bootstrap';

export type TwdataformTextProps = {
  label: string;
  value: string;
  comment?: string;
  isInvalid?: boolean;
  invalidFeedback?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function TwdataformText(props: TwdataformTextProps) {
  const comment = props.comment || "";
  return (
    <Form.Group className="mb-3" controlId={props.label}>
      <Form.Label>{props.label}</Form.Label> <span>{comment}</span>
      <Form.Control
        type="text"
        onChange={props.onChange}
        value={props.value}
        isInvalid={props.isInvalid} />
      <div className="invalid-feedback">{props.invalidFeedback}</div>
    </Form.Group>
  );
}

export default TwdataformText;
