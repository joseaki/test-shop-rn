import React, {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  TextInputProps,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Hooks
import useStyles from "../../../hooks/useStyles";
// Types, Styles
import { HeaderProps as Props } from "./Header.types";
import componentStyles from "./Header.styles";
import { debounce } from "../../../Lib/utils";
import { useSearchText } from "../../../hooks/useSearchBox";
import { useNavigation } from "@react-navigation/native";
import { useProductSearch } from "../../../hooks/services/products";

/**
 * Render a Header.
 * @since 1.0.x
 */
export const Header: React.FC<Props> = (props) => {
  const { colors, styles } = useStyles(componentStyles);
  const { setText, searchText } = useSearchText();
  const { status } = useProductSearch();
  const navigation = useNavigation();

  const handleTextChange = (text: string) => {
    setText(text);
  };

  useEffect(() => {
    if (searchText && status === "success") {
      navigation.navigate("ProductsSearch");
    }
  }, [status, searchText]);

  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Shoes"
        defaultValue={searchText}
        style={styles.searchInput}
        keyboardType={"numbers-and-punctuation"}
        onChangeText={debounce(handleTextChange, 400)}
      />
    </View>
  );
};
