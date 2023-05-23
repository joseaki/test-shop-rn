import { DefaultTheme, Theme } from "@react-navigation/native";

export const colorsLight = {
  // DEFAULT COLORS
  primary: "#ebc034",
  background: "#F8F8F8",
  card: "#F8F8F8",
  text: "#00AEC9",
  border: "#1877F2",
  notification: "#004444",
  // CUSTOM COLORS
  alert: "#ff2333",
  primaryTransparent: "#ebc034aa",
  contrastText: "#232323",
  borderLight: "#D4D4D4",
  textPlaceholder: "#A3A3A3",
  textLight: "#A19E9A",
  textSemiDark: "#292929",
};

export const CustomLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colorsLight,
  },
};
