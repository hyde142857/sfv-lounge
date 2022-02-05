import { useState } from 'react';
import { Props } from '../types/Defs';
import { copyClipboard } from '../api/Utils';
import {
  Box, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormHelperText
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function ClipboardButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="contained" color="secondary" fullWidth size='large'
        startIcon={<ContentCopyIcon />}
        onClick={() => copyClipboard(props.twdata, handleShow)}
      >
        クリップボードにコピー
      </Button>
      <FormHelperText>LINEやDiscordから募集する際、活用ください。</FormHelperText>
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <DialogTitle id="alert-dialog-title">
            クリップボードにコピー
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              クリップボードにコピーしました。ペーストしてご利用ください。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              閉じる
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

export default ClipboardButton;
