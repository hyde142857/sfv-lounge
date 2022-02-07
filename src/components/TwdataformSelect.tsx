import { TweetData } from '../types/Defs';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

export type TwdataformSelectProps = {
  label: string;
  comment?: string;
  options: string[];
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
};

function TwdataformSelect(props: TwdataformSelectProps) {
  const comment = props.comment || '';
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
      <FormHelperText>{comment}</FormHelperText>
    </FormControl>
  </>);
}

export default TwdataformSelect;
