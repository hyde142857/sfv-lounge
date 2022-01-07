import { Form } from "react-bootstrap";

export type TwdataformSelectProps = {
    label: string;
    value: string;
    options: string[];
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

function TwdataformSelect(props:TwdataformSelectProps) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Select
                onChange={props.onChange}
                value={props.value} >
                {
                    props.options.map((opt) => <option key={opt}>{opt}</option>)
                }
            </Form.Select>
        </Form.Group>
    );
}

export default TwdataformSelect;
