import { Form } from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';
import { TweetData } from "../types/Defs";

export type TwdataformSelectMultiProps = {
  label: string;
  options: string[];
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
}

function getOpts(props: TwdataformSelectMultiProps){
  let opts = [];
  for (const opt of props.options) {
    opts.push({ name:opt, id:opt });
  }
  return opts;
}

function getSelectedOpts(props: TwdataformSelectMultiProps){
  const value = props.twdata[props.twdataKey];
  const selected = value.replace("　"," ").split(' ');
  let selected_opts = [];
  if (value !== "") {
    for (const opt of selected) {
      selected_opts.push({ name: opt.trim(), id: opt.trim() });
    }
  }
  return selected_opts;
}

function TwdataformSelectMulti(props: TwdataformSelectMultiProps) {
  let opts = getOpts(props);
  let selected_opts = getSelectedOpts(props);

  const onChange = (selectedList: any) => {
    const lselected = [];
    for (const opt of selectedList) {
      lselected.push(opt.id);
    }
    var val = lselected.join(' ');
    props.updateTwdata(props.twdataKey,val);
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
        placeholder="選択してください"
      />
    </Form.Group>
  );
}

export default TwdataformSelectMulti;
