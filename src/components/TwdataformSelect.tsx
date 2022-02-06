import { TweetData } from '../types/Defs';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export type TwdataformSelectProps = {
  label: string;
  options: string[];
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
};

function TwdataformSelect(props: TwdataformSelectProps) {
  return (<>
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select
        labelId={props.twdataKey}
        id={props.twdataKey}
        value={props.twdata[props.twdataKey]}
        label={props.label}
        onChange={
          e => { props.updateTwdata(props.twdataKey, e.target.value); }
        }
      >
        {
          props.options.map((opt) => <MenuItem key={opt} value={opt}>{opt === '' ? '選択なし' : opt}</MenuItem>)
        }
      </Select>
    </FormControl>
  </>);
}

export default TwdataformSelect;
