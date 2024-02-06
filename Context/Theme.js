import React from "react";
import { useRouter } from "next/router";

const ThemeContext = React.createContext(null);

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const ThemeProvider = (props) => {
  const { category } = useRouter().query;
  const categoryArr = ["shree", "aastha", "isha", "mann"];
  const theme = categoryArr.includes(category) ? category : "shree";
  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
