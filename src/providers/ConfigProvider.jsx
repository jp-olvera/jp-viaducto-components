import React, { createContext, useState } from 'react';
import config from '../utils/config.js';

export const ConfigContext = createContext();

const ConfigProvider = ({ children }) => {
  const [configuration, setConfiguration] = useState(config);
  // console.log(configuration)
  const updateConfig = (newConfig) => {
    setConfiguration((oldConfig) => ({ ...oldConfig, ...newConfig }));
  };
  return (
    <ConfigContext.Provider value={{ configuration, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
