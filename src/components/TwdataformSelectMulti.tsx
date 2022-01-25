import { Form } from "react-bootstrap";
import { Select, ModalCloseButton, MultiSelectOptionMarkup } from 'react-responsive-select';
import { TweetData } from "../types/Defs";

import 'react-responsive-select/dist/react-responsive-select.css';

export type TwdataformSelectMultiProps = {
  label: string;
  options: string[];
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
}

function getOpts(props: TwdataformSelectMultiProps){
  let opts = [];
  opts.push({ value: '', text: '選択なし' });
  for (const opt of props.options) {
    opts.push({ value: opt, text: opt, markup: <MultiSelectOptionMarkup text={opt} props={null} /> });
  }
  return opts;
}

function getSelectedOpts(props: TwdataformSelectMultiProps){
  const value = props.twdata[props.twdataKey];
  const selected = value.replace("　"," ").split(' ');
  let selected_opts = [];
  if (value !== "") {
    for (const opt of selected) {
      selected_opts.push(opt.trim());
    }
  }
  return selected_opts;
}

function TwdataformSelectMulti(props: TwdataformSelectMultiProps) {
  let opts = getOpts(props);
  let selected_opts = getSelectedOpts(props);

  const onChange = (selectedList: any) => {
    const lselected = [];
    for (const opt of selectedList.options) {
      lselected.push(opt.value);
    }
    var val = lselected.join(' ');
    props.updateTwdata(props.twdataKey,val);
  }

  return (
    <Form.Group className="mb-3" controlId={props.label}>
      <Form.Label>{props.label}</Form.Label>
      <Select
        multiselect={true}
        name={props.twdataKey}
        selectedValues={selected_opts}
        modalCloseButton={<ModalCloseButton />}
        options={opts}
        onBlur={newValue => onChange(newValue)}
      />
    </Form.Group>
  );
}

export default TwdataformSelectMulti;
