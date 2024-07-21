import {
  globalStyle,
  createThemeContract,
  createGlobalTheme,
  createTheme,
} from "@vanilla-extract/css";
export const global = createGlobalTheme(":root", {
  fontSize: {
    xLarge: "48px",
    large: "36px",
    medium: "28px",
    regular: "18px",
    small: "16px",
    micro: "14px",
  },
  fontWeight: {
    light: "200",
    normal: "400",
    large: "800",
  },
  color: {
    primary: "#405D72",
    secondary: "#758694",
  },
});
const themeColor = createThemeContract({
  color: {
    mainBackground: null,
    contentBackground: null,
    mainFontColor: null,
    borderColor: null,
    gradient: null,
  },
});
export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: "#FFF8F3",
    contentBackground: "#FFFFFF",
    mainFontColor: "#00070C",
    borderColor: "#6F7980",
    gradient: `linear-gradient(${global.color.primary},${global.color.secondary})`,
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: "#00070C",
    contentBackground: "#2c2c2c",
    mainFontColor: "#ffffff",
    borderColor: "#6F7980",
    gradient: `linear-gradient(${global.color.primary},${global.color.secondary})`,
  },
});
export const vars = { ...global, themeColor };
globalStyle("body", {
  backgroundColor: `hsl(${vars.themeColor.color.mainBackground})`,
  height: "100vh",
  width: "100vw",
});
