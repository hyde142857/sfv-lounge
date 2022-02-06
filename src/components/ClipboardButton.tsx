import { useState } from 'react';
import { Props } from '../types/Defs';
import { copyClipboard } from '../api/Utils';
import {
  Box, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormHelperText
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ClipboardButtonDialogProps {
  show: boolean;
  handleClose: () => void;
}

function ClipboardButtonDialogBox(props: ClipboardButtonDialogProps) {
  return (<>
    <DialogTitle id='alert-dialog-title'>
      クリップボードにコピー
    </DialogTitle>
    <DialogContent>
      <DialogContentText id='alert-dialog-description'>
        クリップボードにコピーしました。<br />
        ペーストしてご利用ください。
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose} autoFocus>
        閉じる
      </Button>
    </DialogActions>
  </>);
}

function ClipboardButtonDialog(props: ClipboardButtonDialogProps) {
  return (
    <Dialog
      open={props.show}
      onClose={props.handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box>
        <ClipboardButtonDialogBox {...props} />
      </Box>
    </Dialog>
  );
}

function ClipboardButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
    <Button
      variant='contained' color='secondary' fullWidth size='large'
      startIcon={<ContentCopyIcon />}
      onClick={() => copyClipboard(props.twdata, handleShow)}
    >
      クリップボードにコピー
    </Button>
    <FormHelperText>LINEやDiscordから募集する際、活用ください。</FormHelperText>
    <ClipboardButtonDialog show={show} handleClose={handleClose} />
  </>);
}

export default ClipboardButton;
