import React, { useContext, useState } from 'react';
import { object, string } from 'prop-types';
import dynamic from 'next/dynamic';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, TextField } from '@material-ui/core';
const Card = dynamic(() => import('@material-ui/core/Card'), {
  ssr: false,
});

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import { ModalSendContext } from 'context/ModalSendContext';

const useStyles = makeStyles(() => ({
  card: {
    '& h4': {
      alignSelf: 'center',
    },
    '& hr': {
      width: '0',
      border: '1px solid #CAE7FE',
    },
    '& span': {
      margin: 'auto',
    },
  },
  formContainer: {
    width: '100%',
    padding: '20px',
    display: 'grid',
    gridGap: '10px',
    gridTemplate: 'minmax(150px, auto) auto / auto',
    margin: 'auto',
    '& div': {
      width: '100%',
      color: 'rgba(49, 49, 49, 0.5)',
    },
  },
  formInner: {
    gridColumn: '1/3',
    display: 'grid',
    gridGap: '10px',
    gridTemplate: 'auto / repeat(auto-fit, minmax(240px, auto))',
  },
  editBox: {
    display: 'flex',
    minHeight: '80px',
    margin: 'auto',
    '& svg': {
      width: 30,
      height: 30,
      fill: '#00BFA5',
      margin: 'auto 40px auto 20px',
      paddingRight: '5px',
      '@media screen and (max-width: 576px)': {
        display: 'none',
      },
    },
    '& hr': {
      marginLeft: '40px',
      '@media screen and (max-width: 576px)': {
        display: 'none',
      },
    },
    '& div': {
      margin: 'auto',
      '& p': {
        position: 'absolute',
        bottom: '-20px',
      },
    },
  },
  sendButton: {
    padding: '10px',
    margin: 'auto',
    gridColumn: '1/3',
    gridRow: 2,
    background: '#01BDA7',
    borderRadius: '36px',
    '@media screen and (max-width: 576px)': {
      // gridColumn: 1,
      // gridRow: 4,
    },
    '&:hover': {
      backgroundColor: '#01BDA7',
    },
    '& span': {
      textTransform: 'initial',
      fontSize: '14px',
      lineHeight: '19px',
      margin: '5px 10px',
      color: '#FFFFFF',
    },
  },
}));

const PersonalEdit = ({ className, profile }) => {
  const classes = useStyles();
  const { setOpen, setData, setMessage } = useContext(ModalSendContext);
  const [fullName, setFullName] = useState({
    value: profile.fullName,
    isError: false,
  });
  const [email, setEmail] = useState({
    value: profile.email,
    isError: false,
  });
  const [phone, setPhone] = useState({
    value: profile.phone,
    isError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.isError && !email.isError && !phone.isError) {
      setMessage(false);
      setOpen((prev) => !prev);
      setData((prev) => ({
        ...prev,
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
      }));
      setFullName({ ...fullName, isError: false });
      setEmail({ ...email, isError: false });
      setPhone({ ...phone, isError: false });
    }
  };

  return (
    <Card className={`${className} ${classes.card}`}>
      <form
        className={classes.formContainer}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={classes.formInner}>
          <div className={classes.editBox}>
            <AccountBoxIcon />
            <TextField
              error={fullName.isError}
              id="form-full-name"
              label="Фамилия и имя"
              variant="outlined"
              helperText={fullName.isError ? 'Вы неверно указали имя' : ''}
              value={fullName.value}
              onChange={(e) => {
                if (!e.target.value.match(/^[A-Za-zА-Яа-я ]+$/))
                  setFullName({
                    ...fullName,
                    value: e.target.value,
                    isError: true,
                  });
                else
                  setFullName({
                    ...fullName,
                    value: e.target.value,
                    isError: false,
                  });
              }}
            />
            <Divider orientation="vertical" flexItem variant="fullWidth" />
          </div>
          <div className={classes.editBox}>
            <AlternateEmailIcon />
            <TextField
              error={email.isError}
              id="form-email"
              label="E-mail"
              variant="outlined"
              helperText={email.isError ? 'Вы неверно указали email' : ''}
              value={email.value}
              onChange={(e) => {
                if (
                  !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    e.target.value
                  )
                ) {
                  setEmail({
                    ...email,
                    value: e.target.value,
                    isError: true,
                  });
                } else {
                  setEmail({ ...email, value: e.target.value, isError: false });
                }
              }}
            />
            <Divider orientation="vertical" flexItem variant="fullWidth" />
          </div>
          <div className={classes.editBox}>
            <PhoneIcon />
            <TextField
              error={phone.isError}
              id="form-phone"
              label="Номер телефона"
              variant="outlined"
              helperText={phone.isError ? 'Вы неверно указали телефон' : ''}
              value={phone.value}
              onChange={(e) => {
                if (
                  !e.target.value.match(
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                  )
                ) {
                  setPhone({ ...phone, value: e.target.value, isError: true });
                } else
                  setPhone({ ...phone, value: e.target.value, isError: false });
              }}
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.sendButton}
        >
          Сохранить изменения
        </Button>
      </form>
    </Card>
  );
};

PersonalEdit.defaultProps = {
  className: '',
  profile: {},
};

PersonalEdit.propTypes = {
  className: string,
  profile: object,
};

export default PersonalEdit;
