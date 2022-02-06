import { FormControl, TextField } from '@mui/material';
import { TweetData } from '../types/Defs';

export type TwdataformTextareaProps = {
  label: string;
  isInvalid?: boolean;
  invalidFeedback?: string;
  twdataKey: keyof TweetData;
  twdata: TweetData;
  updateTwdata: (key: keyof TweetData, val: string) => void;
};

function TwdataformTextarea(props: TwdataformTextareaProps) {
  return (<>
    <FormControl fullWidth>
      <TextField variant='outlined'
        multiline rows={3}
        id={props.twdataKey}
        label={props.label}
        value={props.twdata[props.twdataKey]}
        onChange={
          e => { props.updateTwdata(props.twdataKey, e.target.value); }
        }
      />
    </FormControl>
  </>
  );
}

export default TwdataformTextarea;
