import { Form } from 'react-bootstrap';

export type TwdataformTextProps = {
    label: string;
    value: string;
    isInvalid?: boolean;
    invalidFeedback?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function TwdataformText(props: TwdataformTextProps) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{props.label}</Form.Label>
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
