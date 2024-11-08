// ClickContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const ClickContext = createContext();

// Create a provider component
export const ClickProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  // Ensure the context provides both `clicked` and `setClicked`
  return (
    <ClickContext.Provider value={{ clicked, setClicked }}>
      {children}
    </ClickContext.Provider>
  );
};

export default ClickContext;