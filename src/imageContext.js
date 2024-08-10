import { createContext, useState } from 'react';

export const ImageContext = createContext<{ clickedImage: string; setClickedImage: (image: string) => void }>({ clickedImage: '', setClickedImage: () => {} });

export const ImageProvider: React.FC = ({ children }) => {
  const [clickedImage, setClickedImage] = useState('');

  return (
    <ImageContext.Provider value={{ clickedImage, setClickedImage }}>
      {children}
    </ImageContext.Provider>
  );
};
