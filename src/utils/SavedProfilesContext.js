import React, { createContext, useState, useContext } from "react";

const SavedProfilesContext = createContext();

export const SavedProfilesProvider = ({ children }) => {
  const [savedProfiles, setSavedProfiles] = useState({});

  const toggleSave = (id) => {
    setSavedProfiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SavedProfilesContext.Provider value={{ savedProfiles, toggleSave }}>
      {children}
    </SavedProfilesContext.Provider>
  );
};

export const useSavedProfiles = () => useContext(SavedProfilesContext);
