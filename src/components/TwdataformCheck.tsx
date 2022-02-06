import { string2boolean } from '../api/Utils';
import { TweetData } from '../types/Defs';
import { FormControlLabel, Checkbox, FormHelperText } from '@mui/material';

export type TwdataformCheckProps = {
  label: string;
  comment?: string;
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
};

function TwdataformCheck(props: TwdataformCheckProps) {
  const comment = props.comment || '';
  return (<>
    <FormControlLabel
      control={
        <Checkbox
          id={props.twdataKey}
          checked={string2boolean(props.twdata.attachToolUrl, true)}
          onChange={
            e => { props.updateTwdata(props.twdataKey, String(e.target.checked)); }
          }
        />}
      label={props.label}
    />
    <FormHelperText>{comment}</FormHelperText>
  </>);
}

export default TwdataformCheck;
