import { DarkTheme } from "@react-navigation/native";
import { AppColors } from ".";

export const colorsDark: AppColors = {
  // DEFAULT COLORS
  primary: "#ebc034",
  background: "#F8F8F8",
  card: "#F8F8F8",
  text: "#00AEC9",
  border: "#1877F2",
  notification: "#004444",
  // CUSTOM COLORS
  primaryTransparent: "#ebc034aa",
  contrastText: "#efefef",
  borderLight: "#D4D4D4",
  textPlaceholder: "#A3A3A3",
  textLight: "#A19E9A",
  textSemiDark: "#292929",
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...colorsDark,
  },
};
