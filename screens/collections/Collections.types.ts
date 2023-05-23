import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/stackNavigator.types";

/**
 * @interface Collections
 * @since 1.0.x
 */
export type CollectionsProps = NativeStackScreenProps<
  RootStackParamList,
  "Collections"
>;

/**
 * Form data
 * @type Form
 * @since 1.0.x
 * @example {user: "user", password: "password"}
 */
export interface Form {
  user: string;
  password: string;
}
