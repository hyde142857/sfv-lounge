import { FormControl, TextField } from '@mui/material';
import { TweetData } from '../types/Defs';

export type TwdataformTextProps = {
  label: string;
  comment?: string;
  isInvalid?: boolean;
  invalidFeedback?: string;
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
};

function TwdataformText(props: TwdataformTextProps) {
  const comment = props.comment || '';
  const isInvalid = props.isInvalid || false;
  const invalidFeedback = props.invalidFeedback || '';
  return (<>
    <FormControl fullWidth>
      <TextField variant='outlined'
        id={props.twdataKey}
        label={props.label}
        value={props.twdata[props.twdataKey]}
        onChange={
          e => { props.updateTwdata(props.twdataKey, e.target.value); }
        }
        error={isInvalid}
        helperText={(isInvalid ? invalidFeedback : '') + comment}
      />
    </FormControl>
  </>
  );
}

export default TwdataformText;
