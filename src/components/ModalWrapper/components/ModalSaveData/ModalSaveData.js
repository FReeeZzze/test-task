import React from 'react';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { setByLocalStorage } from 'utils/localStorageUtils';
import { requestProfile } from 'api/requestProfile';

const useStyles = makeStyles(() =>
  createStyles({
    innerModal: {
      margin: '25px auto',
      display: 'grid',
      maxWidth: '300px',
      gridGap: '20px',
      position: 'relative',
      '& h3': {
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '33px',
        color: 'rgba(49, 49, 49, 0.7)',
      },
    },
    saveButton: {
      margin: 'auto',
      width: '202px',
      minHeight: '50px',
      fontSize: '14px',
      lineHeight: '19px',
      textTransform: 'initial',
      color: '#FFFFFF',
      borderRadius: '41px',
      background: '#01BDA7',
      boxShadow: 'none',
      '&:hover': {
        background: '#01BDA7',
        boxShadow: 'none',
      },
    },
    dontSaveButton: {
      margin: 'auto',
      width: '202px',
      minHeight: '50px',
      fontSize: '14px',
      lineHeight: '19px',
      textTransform: 'initial',
      color: '#01BDA7',
      borderRadius: '41px',
      border: '1px solid #00BFA5',
      '&:hover': {
        background: '#FFFFFF',
      },
    },
  })
);

const ModalSaveData = ({ onData, onClose, openMessageDialog, dataProfile }) => {
  const classes = useStyles();

  return (
    <div className={classes.innerModal}>
      <h3 id="server-modal-title">Сохранить изменения?</h3>
      <Button
        variant="contained"
        className={classes.saveButton}
        onClick={() => {
          onData();
          requestProfile(dataProfile).then((r) => console.log('data: ', r));
          setByLocalStorage(dataProfile);
          openMessageDialog();
        }}
      >
        Сохранить
      </Button>
      <Button
        variant="outlined"
        className={classes.dontSaveButton}
        onClick={onClose}
      >
        Не сохранять
      </Button>
    </div>
  );
};

export default ModalSaveData;
