import { StyleSheet, NativeModules } from "react-native";
import { AppColors } from "../../../config/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

const styles = (colors: AppColors) => {
  return StyleSheet.create({
    content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingTop: STATUSBAR_HEIGHT + 16,
      paddingBottom: 16,
    },
    searchButton: {
      padding: 16,
    },
    searchInput: {
      paddingHorizontal: 16,
      height: 40,
      marginHorizontal: 16,
      flex: 1,
      borderRadius: 50,
      borderColor: colors.primary,
      borderWidth: 1,
    },
  });
};

export default styles;
