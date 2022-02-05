import { useState } from 'react';
import { Props, TweetData } from '../types/Defs';
import { saveLocalStorage } from '../api/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  Box, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';

function saveImpl(twdata: TweetData, handleShow:() => void) {
  saveLocalStorage(twdata);
  handleShow();
}

function SaveButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outlined" fullWidth size='large'
        startIcon={<FontAwesomeIcon icon={faDatabase} width={24} height={24} />}
        onClick={() => saveImpl(props.twdata, handleShow)}
      >
        ブラウザにデータ保存
      </Button>
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <DialogTitle id="alert-dialog-title">
            ブラウザにデータ保存
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              保存しました。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              閉じる
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>);
}

export default SaveButton;
