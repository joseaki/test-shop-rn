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
      flexDirection: "row",
      backgroundColor: "#ffffff",
      borderRadius: 32,
    },
    imageContainer: {
      width: "40%",
    },
    image: {
      height: "100%",
      width: "100%",
      borderRadius: 32,
    },
    saleContainer: {
      backgroundColor: colors.alert,
      position: "absolute",
      top: -8,
      right: -8,
      padding: 4,
      paddingHorizontal: 8,
      borderRadius: 50,
    },
    saleText: { color: "#ffffff", fontWeight: "bold" },
    descriptionContainer: {
      flex: 1,
      margin: 16,
      marginLeft: 24,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    titleText: { fontSize: 24, fontWeight: "300" },
    bottomContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    priceText: { fontWeight: "bold" },
    buttonsContainer: { flexDirection: "row" },
    button: { padding: 8 },
    buttonText: { fontSize: 32 },
  });
};

export default styles;
