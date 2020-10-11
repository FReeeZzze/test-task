import React from 'react';
import { any, string } from 'prop-types';
import Head from 'next/head';
import { ProfileContextProvider } from 'context/ProfileContext';
import { ModalSendContextProvider } from 'context/ModalSendContext';

const BaseLayout = ({ children, title }) => {
  return (
    <ProfileContextProvider>
      <ModalSendContextProvider>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Описание" />
          <meta name="keywords" content="ключевые слова" />
        </Head>
        <main>{children}</main>
      </ModalSendContextProvider>
    </ProfileContextProvider>
  );
};

BaseLayout.defaultProps = {
  title: 'default title',
};

BaseLayout.propTypes = {
  children: any,
  title: string,
};

export default BaseLayout;
