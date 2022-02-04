import { TweetData } from "../types/Defs";
import { FormControl, InputLabel, MenuItem, Select, ListSubheader, FormHelperText } from "@mui/material";

import 'react-responsive-select/dist/react-responsive-select.css';

export type TwdataformSelectMultiProps = {
  label: string;
  options: string[];
  twdataKey: keyof TweetData;
  twdata: TweetData;
  comment?: string;
  updateTwdata: (key: keyof TweetData, val: string) => void;
}

function getSelectedOpts(props: TwdataformSelectMultiProps) {
  const value = props.twdata[props.twdataKey];
  const selected = value.replace("　", " ").split(' ');
  let selected_opts: string[] = [];
  if (value !== "") {
    for (const opt of selected) {
      const opt_trimed = opt.trim();
      if (props.options.includes(opt_trimed)) {
        selected_opts.push(opt_trimed);
      }
    }
  }
  return selected_opts;
}

function TwdataformSelectMulti(props: TwdataformSelectMultiProps) {
  let selected_opts = getSelectedOpts(props);
  const comment = props.comment || "";

  return (<>
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select multiple
        labelId={props.twdataKey}
        id={props.twdataKey}
        value={selected_opts}
        label={props.label}
        onChange={
          e => {
            const value = e.target.value;
            const lvalue:string = typeof value == 'string' ? value : value.join(" ");
            props.updateTwdata(props.twdataKey, lvalue );
          }
        }
      >
        {
          props.options.map((opt) =>
            opt.startsWith("optHeader:") ? (<ListSubheader>{opt.substring("optHeader:".length)}</ListSubheader>) :
              <MenuItem value={opt}>{opt === "" ? "選択なし" : opt}</MenuItem>)
        }
      </Select>
      <FormHelperText>
        {comment}
      </FormHelperText>
    </FormControl>
  </>);
}

export default TwdataformSelectMulti;
