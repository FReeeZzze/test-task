import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';

import dynamic from 'next/dynamic';
const Card = dynamic(() => import('@material-ui/core/Card'), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  card: {
    '& h4': {
      alignSelf: 'center',
    },
    '& hr': {
      height: '0px',
      border: '1px solid #CAE7FE',
    },
    '& span': {
      margin: 'auto',
    },
  },
  personalData: {
    margin: 'auto 0 auto 50px',
    display: 'grid',
    gridTemplate: 'auto / minmax(auto, 27px) auto',
    gridGap: '45px',
    alignItems: 'center',
    '@media screen and (max-width: 576px)': {
      gridGap: '5px',
      margin: 'auto 0 auto 12px',
    },
    '& svg': {
      fill: '#00BFA5',
    },
    '& h4': {
      fontFamily: 'Open Sans, sans serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#313131',
      '@media screen and (max-width: 576px)': {
        fontSize: '14px',
        lineHeight: '19px',
      },
    },
  },
}));

const PersonalInfo = ({ className, profile }) => {
  const classes = useStyles();
  return (
    <Card className={`${className} ${classes.card}`}>
      <div className={classes.personalData}>
        <AlternateEmailIcon />
        <Typography color="textPrimary" variant="h4" component="h4">
          {profile.email}
        </Typography>
      </div>
      <Divider orientation="horizontal" flexItem variant="fullWidth" />
      <div className={classes.personalData}>
        <PhoneIcon />
        <Typography color="textPrimary" variant="h4" component="h4">
          {profile.phone}
        </Typography>
      </div>
    </Card>
  );
};

export default PersonalInfo;
