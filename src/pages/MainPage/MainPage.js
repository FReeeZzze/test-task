import React from 'react';
import {
  HeaderViewProfile,
  ProfilePanel,
  PersonalContainer,
} from './components';

import WrapperBreadCrumbs from 'components/WrapperBreadCrumbs';
import s from './MainPageStyles.module.scss';

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <div className={s.container}>
        <HeaderViewProfile />
        <WrapperBreadCrumbs />
        <ProfilePanel />
        <PersonalContainer />
      </div>
    </div>
  );
};
export default MainPage;
