import { useState } from 'react';
import { Props } from '../types/Defs';
import { copyClipboard } from '../api/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import {
  Box, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormHelperText
} from '@mui/material';

function ClipboardButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outlined" fullWidth size='large'
        startIcon={<FontAwesomeIcon icon={faCopy} width={24} height={24} />}
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
