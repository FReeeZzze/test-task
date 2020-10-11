import React, { useContext } from 'react';
import { bool, func } from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';

import { ProfileContext } from 'context/ProfileContext';
import { ModalSaveData, MessageAlert } from './components';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: 'translateZ(0)',
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer: {
      alignItems: 'center',
      width: 600,
      height: 300,
      background: '#FFFFFF',
      borderRadius: '10px',
      backgroundColor: theme.palette.background.paper,
    },
    closeButton: {
      position: 'relative',
      '&::after': {
        cursor: 'pointer',
        display: 'block',
        position: 'absolute',
        top: '10px',
        right: '10px',
        content: '""',
        width: '14px',
        height: '14px',
        background: 'url("/images/CloseButton.svg") 100% 100% no-repeat',
        backgroundSize: 'cover',
      },
    },
  })
);

const ModalWrapper = ({
  isOpen,
  onClose,
  data,
  isMessage,
  openMessageDialog,
}) => {
  const classes = useStyles();
  const rootRef = React.useRef(null);
  const { setProfileData } = useContext(ProfileContext);

  return (
    <div className={classes.wrapper} ref={rootRef}>
      <Modal
        open={isOpen}
        className={classes.modal}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
      >
        <div className={classes.modalContainer}>
          <div onClick={onClose} className={classes.closeButton} />
          {!isMessage ? (
            <ModalSaveData
              openMessageDialog={openMessageDialog}
              onClose={onClose}
              dataProfile={data}
              onData={() =>
                setProfileData((prev) => ({
                  ...prev,
                  fullName: data.fullName,
                  email: data.email,
                  phone: data.phone,
                }))
              }
            />
          ) : (
            <MessageAlert onClose={onClose} />
          )}
        </div>
      </Modal>
    </div>
  );
};

ModalWrapper.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

ModalWrapper.propTypes = {
  isOpen: bool,
  onClose: func,
};

export default ModalWrapper;
