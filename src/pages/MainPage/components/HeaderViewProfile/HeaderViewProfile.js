import React, { useContext } from 'react';
import { string } from 'prop-types';
import dynamic from 'next/dynamic';
const Grid = dynamic(() => import('@material-ui/core/Grid'), {
  ssr: false,
});
import { abbreviatedForm } from 'utils/textUtils';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';

import { ProfileContext } from 'context/ProfileContext';
import s from './HeaderViewProfile.module.scss';

const useStyles = makeStyles((theme) => ({
  imgAvatar: {
    cursor: 'pointer',
    margin: '0 20px',
    '@media screen and (max-width: 576px)': {
      margin: '0 0 0 10px',
    },
  },
  gridBox: {
    margin: 'auto',
    width: '100%',
    '& svg': {
      cursor: 'pointer',
      margin: '0 26px',
      '@media screen and (max-width: 576px)': {
        margin: '0 14px',
      },
    },
    '& hr': {
      width: '1.5px',
      backgroundColor: '#FFFFFF',
      margin: theme.spacing(0, 0.2),
    },
    '& span': {
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '19px',
    },
  },
  fullName: {
    textTransform: 'capitalize',
  },
}));

const HeaderViewProfile = ({ className }) => {
  const { profileData } = useContext(ProfileContext);
  const classes = useStyles();
  return (
    <div className={`${s.viewProfile} ${className}`}>
      <Grid container alignItems="center" className={classes.gridBox}>
        <NotificationsNoneIcon fontSize="large" />
        <Divider orientation="vertical" flexItem />
        <Avatar
          alt="Profile Avatar"
          src="/images/avatar.jpg"
          className={classes.imgAvatar}
        />
        <span className={classes.fullName}>
          {abbreviatedForm(profileData.fullName)}
        </span>
      </Grid>
    </div>
  );
};

HeaderViewProfile.defaultProps = {
  className: '',
};

HeaderViewProfile.propTypes = {
  className: string,
};

export default HeaderViewProfile;
