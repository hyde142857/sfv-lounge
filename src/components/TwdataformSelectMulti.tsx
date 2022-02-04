import { TweetData } from "../types/Defs";
import { FormControl, InputLabel, MenuItem, Select, ListSubheader, FormHelperText, Checkbox, ListItemText, Chip } from "@mui/material";

import 'react-responsive-select/dist/react-responsive-select.css';
import { Box } from "@mui/system";

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

function getItem(opt: string,selected_opts: string[]) {
  if (opt.startsWith("optHeader:")) {
    return (<ListSubheader>{opt.substring("optHeader:".length)}</ListSubheader>);
  }
  return (<MenuItem key={opt} value={opt}>
    <Checkbox checked={selected_opts.indexOf(opt) > -1} />
    <ListItemText primary={opt} />
  </MenuItem>);
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
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        onChange={
          e => {
            const value = typeof e.target.value == 'string' ? [e.target.value] : e.target.value;
            if (value.indexOf("") > -1) {
              props.updateTwdata(props.twdataKey, "");
            } else {
              props.updateTwdata(props.twdataKey, value.join(""));
            }
          }
        }
      >
        <MenuItem key="" value="">選択なし</MenuItem>
        {
          props.options.map((opt) => getItem(opt,selected_opts))
        }
      </Select>
      <FormHelperText>
        {comment}
      </FormHelperText>
    </FormControl>
  </>);
}

export default TwdataformSelectMulti;
