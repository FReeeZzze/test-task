import React from 'react';
import { func } from 'prop-types';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    innerModal: {
      margin: '50px auto',
      display: 'grid',
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
    buttonGood: {
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
  })
);

const MessageAlert = ({ onClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.innerModal}>
      <h3>Данные успешно сохранены</h3>
      <Button onClick={onClose} className={classes.buttonGood}>
        Хорошо
      </Button>
    </div>
  );
};

MessageAlert.defaultProps = {
  onClose: () => {},
};

MessageAlert.propTypes = {
  onClose: func,
};

export default MessageAlert;
