import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/stackNavigator.types";

/**
 * @interface Product
 * @since 1.0.x
 */
export type ProductProps = NativeStackScreenProps<
  RootStackParamList,
  "Products"
>;
