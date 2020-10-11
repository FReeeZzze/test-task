import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from './components/PersonalInfo';
import PersonalEdit from './components/PersonalEdit';

import { ProfileContext } from 'context/ProfileContext';

import s from './PersonalContainer.module.scss';

const useStyles = makeStyles(() => ({
  personalCard: {
    marginRight: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    minHeight: 192,
    '@media screen and (max-width: 576px)': {
      minHeight: 128,
    },
  },
}));

const PersonalContainer = () => {
  const classes = useStyles();
  const { isEdit, profileData, setProfileData } = useContext(ProfileContext);
  return (
    <div className={s.personalContainer}>
      {isEdit ? (
        <PersonalEdit
          profile={profileData}
          editProfile={setProfileData}
          className={classes.personalCard}
        />
      ) : (
        <PersonalInfo profile={profileData} className={classes.personalCard} />
      )}
    </div>
  );
};

export default PersonalContainer;
