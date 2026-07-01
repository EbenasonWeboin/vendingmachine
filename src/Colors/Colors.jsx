// Olive Green Theme
export const oliveTheme = {
  primaryColor: "#4D5A27",
  secondaryColor: "#F8F6E8",
  lightPrimary: "#A3B18A",
  darkPrimary: "#37431C",
  darkText: "#111B27",
  white: "#FFFFFF",
};

// Ocean Blue Theme
export const oceanTheme = {
  primaryColor: "#011C40",    
  secondaryColor: "#F8F6E8",  
  lightPrimary: "#54ACBF",    
  darkPrimary: "#023859",     
  darkText: "#011C40",        
  white: "#FFFFFF",
};

// Purple Theme
export const purpleTheme = {
  primaryColor: "#4F275A",
  secondaryColor: "#F8F6E8",
  lightPrimary: "#AA8AB1",
  darkPrimary: "#3E1C43",
  darkText: "#271122",
  white: "#FFFFFF",
};

// Burgundy Theme
export const burgundyTheme = {
  primaryColor: "#561C24",
  secondaryColor: "#E8D8C4",
  lightPrimary: "#C7B7A3",
  darkPrimary: "#6D2932",
  darkText: "#2D0F15",
  white: "#FFFFFF",
};

// Brown Beige Theme (Default)
export const brownTheme = {
  primaryColor: "#3E2522",
  secondaryColor: "#FFF2DF",
  lightPrimary: "#D3A376",
  darkPrimary: "#775244",
  darkText: "#1E110F",
  white: "#FFFFFF",
};

// Collection of all themes
export const themes = [
  {
    id: 1,
    name: "Olive",
    colors: oliveTheme,
  },
  {
    id: 2,
    name: "Purple",
    colors: purpleTheme,
  },
  {
    id: 3,
    name: "Burgundy",
    colors: burgundyTheme,
  },
  {
    id: 4,
    name: "Brown",
    colors: brownTheme,
  },
  {
  id: 5,
  name: "Ocean",
  colors: oceanTheme,
},
];

// Default Theme
export default oliveTheme;