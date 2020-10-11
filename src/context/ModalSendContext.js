import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
const ModalWrapper = dynamic(() => import('components/ModalWrapper'), {
  ssr: false,
});

export const ModalSendContext = React.createContext({
  isOpen: false,
  setOpen: () => {},
  data: {},
  setData: () => {},
  isMessage: false,
  setMessage: () => {},
});

export const ModalSendContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [isMessage, setMessage] = useState(false);

  return (
    <ModalSendContext.Provider
      value={{ isOpen, setOpen, data, setData, setMessage, isMessage }}
    >
      {children}
      <ModalWrapper
        data={data}
        isOpen={isOpen}
        isMessage={isMessage}
        openMessageDialog={() => setMessage(!isMessage)}
        onClose={() => setOpen(false)}
      />
    </ModalSendContext.Provider>
  );
};

ModalSendContextProvider.propTypes = {
  children: PropTypes.any,
};
