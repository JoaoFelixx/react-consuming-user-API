import { Provider } from 'interfaces';
import React, { createContext, useContext, useState } from 'react';

interface FormatPresentation {
  format: string;
  setFormat?: React.Dispatch<string>;
}

const defaultValues: FormatPresentation = {
  format: 'Card'
}

const Context = createContext(defaultValues);

const useSelectorFormat = () => useContext(Context);

function FormatPresentationProvider ({ children }: Provider) {
  const [format,setFormat] = useState<string>('Card')
  
  return (
    <Context.Provider value={{ format, setFormat }}>
      {children}
    </Context.Provider>
  )
}

export { useSelectorFormat, FormatPresentationProvider };