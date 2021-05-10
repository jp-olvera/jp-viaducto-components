import React, { createContext, useState } from 'react';
import config from '../utils/config';

interface ConfigProviderInterface {
  children: any;
}

interface ConfigContextInterface {
  configuration: any;
  updateConfig: any;
}
export const ConfigContext = createContext<ConfigContextInterface>({
  configuration: {},
  updateConfig: () => {},
});

const ConfigProvider = ({ children }: ConfigProviderInterface) => {
  const [configuration, setConfiguration] = useState(config);
  const updateConfig = (newConfig: any) => {
    setConfiguration((oldConfig) => ({ ...oldConfig, ...newConfig }));
  };
  return (
    <ConfigContext.Provider value={{ configuration, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
