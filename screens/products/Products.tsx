import React from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Hooks
import useStyles from "../../hooks/useStyles";
// Types, Styles
import { ProductProps as Props } from "./Products.types";
import componentStyles from "./Products.styles";
import { useProductList } from "../../hooks/services/products";
import { ProductItem } from "../../components/organisms/Product/ProductItem";

export const Products: React.FC<Props> = (props) => {
  const { navigation, route } = props;

  const { styles, colors } = useStyles(componentStyles);
  const { data, fetchNextPage, hasNextPage } = useProductList(
    route.params.collectionId
  );

  const items =
    data?.pages.flatMap((page) => {
      return page.data.collection?.products.edges;
    }) ?? [];

  const getNextProducts = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 16 }}
        data={items}
        keyExtractor={(item) => item.node.id}
        onEndReached={getNextProducts}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => (
          <ProductItem item={item} onPress={() => {}} />
        )}
      />
    </SafeAreaView>
  );
};
