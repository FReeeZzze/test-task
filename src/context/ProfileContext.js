import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getByLocalStorage } from 'utils/localStorageUtils';

export const ProfileContext = React.createContext({
  isEdit: false,
  setEdit: () => {},
  profileData: getByLocalStorage() ?? {
    fullName: 'безруков максим владимирович',
    email: 'maximbezrukov98@gmail.ru',
    phone: '+37377586807',
  },
  setProfileData: () => {},
});

export const ProfileContextProvider = ({ children }) => {
  const data = getByLocalStorage()
    ? getByLocalStorage()
    : {
        fullName: 'безруков максим владимирович',
        email: 'maximbezrukov98@gmail.ru',
        phone: '+37377586807',
      };
  const [isEdit, setEdit] = useState(false);
  const [profileData, setProfileData] = useState(data);

  return (
    <ProfileContext.Provider
      value={{ isEdit, setEdit, profileData, setProfileData }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

ProfileContextProvider.propTypes = {
  children: PropTypes.any,
};
