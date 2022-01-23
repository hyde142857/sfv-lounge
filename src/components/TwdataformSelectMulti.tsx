import { Form } from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';

export type TwdataformSelectMultiProps = {
  label: string;
  value: string;
  options: string[];
  onChange?: (val:string) => void;
}

function nop(val: string) {
  // nop
}

function TwdataformSelectMulti(props: TwdataformSelectMultiProps) {
  let opts = [];
  for (const opt of props.options) {
    opts.push({ name:opt, id:opt });
  }

  const selected = props.value.replace("　"," ").split(' ');
  let selected_opts = [];
  if (props.value !== "") {
    for (const opt of selected) {
      selected_opts.push({ name: opt.trim(), id: opt.trim() });
    }
  }

  const onChange = (selectedList: any) => {
    const lselected = [];
    for (const opt of selectedList) {
      lselected.push(opt.id);
    }
    const l_onChange = props.onChange || nop;
    var val = lselected.join(' ');
    l_onChange(val);
  }

  const onSelect = (selectedList: any, selectedItem: any) => {
    onChange(selectedList);
  };

  const onRemove = (selectedList: any, removedItem: any) => {
    onChange(selectedList);
  };

  return (
    <Form.Group className="mb-3" controlId={props.label}>
      <Form.Label>{props.label}</Form.Label>
      <Multiselect
        options={opts}
        selectedValues={selected_opts}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
    </Form.Group>
  );
}

export default TwdataformSelectMulti;
