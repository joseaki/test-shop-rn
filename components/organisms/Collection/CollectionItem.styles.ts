import { StyleSheet, NativeModules } from "react-native";
import { AppColors } from "../../../config/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

const styles = (colors: AppColors) => {
  return StyleSheet.create({
    content: {
      flex: 1,
      height: 170,
      marginHorizontal: 16,
    },
    contentTitle: {
      position: "absolute",
      bottom: 8,
      left: 12,
      backgroundColor: "#ffffffaa",
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 16,
    },
    title: { fontWeight: "bold" },
    contentEye: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primaryTransparent,
      borderRadius: 50,
      width: 40,
      height: 40,
      top: 12,
      right: 12,
      position: "absolute",
    },
  });
};

export default styles;
