import React, { useContext } from 'react';
import { string } from 'prop-types';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('@material-ui/core/Card'), {
  ssr: false,
});
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

import { ProfileContext } from 'context/ProfileContext';

import s from './ProfilePanel.module.scss';

const useStyles = makeStyles({
  profileCard: {
    display: 'grid',
    gridTemplate: 'auto / 100px 5fr auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    gridGap: '30px',
    background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%);',
    minWidth: 240,
    minHeight: 78,
    padding: '24px 30px',
    '@media screen and (max-width: 576px)': {
      gridTemplate: 'auto / 40px auto 30px',
      padding: '16px 10px',
      gridGap: '10px',
    },
  },
  profileAvatar: {
    width: '100%',
    margin: 'auto',
    minHeight: 80,
    maxWidth: 80,
    '@media screen and (max-width: 576px)': {
      maxWidth: 40,
      minHeight: 40,
    },
  },
  fullName: {
    margin: 'auto 0',
    fontFamily: 'Open Sans, sans-serif',
    color: '#FFFFFF',
    fontSize: '30px',
    lineHeight: '41px',
    textTransform: 'capitalize',
    '@media screen and (max-width: 576px)': {
      fontSize: '14px',
      lineHeight: '19px',
    },
  },
  editProfile: {
    color: 'white',
    margin: 'auto 0',
    display: 'flex',
    '& svg': {
      marginLeft: '5px',
    },
    '@media screen and (max-width: 576px)': {
      minWidth: '30px',
      maxHeight: '40px',
      padding: 0,
    },
  },
});

const ProfilePanel = ({ className }) => {
  const { isEdit, setEdit, profileData } = useContext(ProfileContext);
  const mediaLarge = useMediaQuery('(max-width:992px)');
  const classes = useStyles();

  return (
    <div className={`${s.profilePanel} ${className}`}>
      <Card className={classes.profileCard}>
        <Avatar
          alt="Profile Avatar"
          src="/images/avatar.jpg"
          className={classes.profileAvatar}
        />
        <Typography
          className={classes.fullName}
          color="textPrimary"
          variant="h3"
          component="h2"
        >
          {profileData.fullName}
        </Typography>
        <Button
          className={classes.editProfile}
          onClick={() => {
            setEdit(!isEdit);
          }}
        >
          {isEdit ? (
            <>
              {!mediaLarge && <span>Закрыть</span>}
              <CloseIcon />
            </>
          ) : (
            <>
              {!mediaLarge && <span>Редактировать</span>}
              <EditIcon />
            </>
          )}
        </Button>
      </Card>
    </div>
  );
};

ProfilePanel.defaultProps = {
  className: '',
};

ProfilePanel.propTypes = {
  className: string,
};

export default ProfilePanel;
