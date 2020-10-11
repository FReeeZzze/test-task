import React from 'react';
import { string } from 'prop-types';
import { Breadcrumbs, Link } from '@material-ui/core';

import { useRouter } from 'next/router';
import s from './WrapperBreadCrumbs.module.scss';

const WrapperBreadCrumbs = ({ className }) => {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div className={`${s.breadCrumbs} ${className}`}>
      <span>Личный профиль</span>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Главная
        </Link>
        <Link color="inherit" href="/" onClick={handleClick}>
          Личный профиль
        </Link>
      </Breadcrumbs>
    </div>
  );
};

WrapperBreadCrumbs.defaultProps = {
  className: '',
};

WrapperBreadCrumbs.propTypes = {
  className: string,
};

export default WrapperBreadCrumbs;
