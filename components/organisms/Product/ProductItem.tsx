import { View, Text, TouchableOpacity, Image } from "react-native";
// Hooks
import useStyles from "../../../hooks/useStyles";
// Types, Styles
import { ProductItemProps as Props } from "./ProductItem.types";
import componentStyles from "./ProductItem.styles";

export const ProductItem: React.FC<Props> = (props) => {
  const { item, onPress } = props;
  const { colors, styles } = useStyles(componentStyles);

  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: item.node.featuredImage.url,
          }}
        />
        {item.node.availableForSale ? (
          <View style={styles.saleContainer}>
            <Text style={styles.saleText}>Sale</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.titleText}>{item.node.title}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.priceText}>
            $
            {item.node.priceRange.minVariantPrice.amount ===
            item.node.priceRange.maxVariantPrice.amount
              ? Number(item.node.priceRange.maxVariantPrice.amount).toFixed(2)
              : `${Number(item.node.priceRange.minVariantPrice.amount).toFixed(
                  2
                )} ~ ${Number(
                  item.node.priceRange.maxVariantPrice.amount
                ).toFixed(2)}`}
          </Text>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
