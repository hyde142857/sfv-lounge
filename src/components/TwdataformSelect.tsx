import { TweetData } from '../types/Defs';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { isMobile } from 'react-device-detect';

export type TwdataformSelectProps = {
  label: string;
  comment?: string;
  options: string[];
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
};

function GetLabel(opt: string) {
  return opt === '' ? '選択なし' : opt;
}

function TwdataformSelect(props: TwdataformSelectProps) {
  const comment = props.comment || '';
  const native = isMobile;
  return (<>
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select native={native}
        labelId={props.twdataKey}
        id={props.twdataKey}
        value={props.twdata[props.twdataKey]}
        label={props.label}
        onChange={
          e => { props.updateTwdata(props.twdataKey, e.target.value); }
        }
      >
        {
          props.options.map((opt) => (
            native ? (
              <option key={opt} value={opt}>{opt}</option>
            ) : (
              <MenuItem key={opt} value={opt}>{GetLabel(opt)}</MenuItem>
            )
          ))
        }
      </Select>
      <FormHelperText>{comment}</FormHelperText>
    </FormControl>
  </>);
}

export default TwdataformSelect;
