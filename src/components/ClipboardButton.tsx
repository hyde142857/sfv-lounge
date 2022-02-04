import { useState } from 'react';
import { Props } from '../types/Defs';
import { copyClipboard } from '../api/Utils';
import { createButton,createSvgIcon } from 'react-social-login-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import {
  Box, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';

function Icon() {
  return (
    <FontAwesomeIcon icon={faCopy} width={24} height={24} />
  );
}

const ButtonComp = createButton(
  {
    text: "クリップボードにコピー",
    icon: createSvgIcon(Icon),
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
  }
);

function ClipboardButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonComp onClick={() => copyClipboard(props.twdata, handleShow)} />
      <span>LINEやDiscordから募集する際、活用ください。</span>
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
