import React, { createContext, useContext, ReactNode } from 'react';

interface Props {
  image: string;
  alt: string;
  text: string;
  useGradient?: boolean;
  width?: boolean;
  fontSize?: boolean;
}

// Define the props for the PropsProvider component
interface PropsProviderProps {
  value: Props;
  children: ReactNode; // This defines that the component can accept children
}

const PropsContext = createContext<Props | undefined>(undefined);

export const PropsProvider: React.FC<PropsProviderProps> = ({ value, children }) => (
  <PropsContext.Provider value={value}>{children}</PropsContext.Provider>
);

export const useProps = () => {
  const context = useContext(PropsContext);
  if (!context) {
    throw new Error('useProps must be used within a PropsProvider');
  }
  return context;
};
