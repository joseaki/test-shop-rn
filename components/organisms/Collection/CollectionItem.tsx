import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Hooks
import useStyles from "../../../hooks/useStyles";
// Types, Styles
import { CollectionItemProps as Props } from "./CollectionItem.types";
import componentStyles from "./CollectionItem.styles";

/**
 * Render a Header.
 * @since 1.0.x
 */
export const CollectionItem: React.FC<Props> = (props) => {
  const { item, onPress } = props;
  const { colors, styles } = useStyles(componentStyles);

  return (
    <TouchableOpacity style={styles.content} onPress={() => onPress(item)}>
      <Image
        style={{ height: "100%", width: "100%", borderRadius: 32 }}
        resizeMode="cover"
        source={{
          uri: item.node.image.url,
        }}
      />
      <View style={styles.contentTitle}>
        <Text style={styles.title}>{item.node.title}</Text>
      </View>
      <View style={styles.contentEye}>
        <FontAwesome name="eye" size={16} color={colors.contrastText} />
      </View>
    </TouchableOpacity>
  );
};
