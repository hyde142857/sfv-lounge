import { Form } from 'react-bootstrap';

export type TwdataformTextareaProps = {
  label: string;
  value: string;
  isInvalid?: boolean;
  invalidFeedback?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function TwdataformTextarea(props: TwdataformTextareaProps) {
  return (
    <Form.Group className="mb-3" controlId={props.label}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as="textarea" rows={3}
        onChange={props.onChange}
        value={props.value}
        isInvalid={props.isInvalid} />
      <div className="invalid-feedback">{props.invalidFeedback}</div>
    </Form.Group>
  );
}

export default TwdataformTextarea;
