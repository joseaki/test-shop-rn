import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";

// Config
import { AppColors } from "../config/theme";

const useStyles = <T extends unknown>(
  componentStyles: (colors: AppColors) => T
) => {
  const { colors, dark } = useTheme();
  return useMemo(
    () => ({
      styles: componentStyles(colors as AppColors),
      colors: colors as AppColors,
    }),
    [dark]
  );
};

export default useStyles;
