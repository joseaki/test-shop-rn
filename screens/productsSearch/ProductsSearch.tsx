import React from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Hooks
import useStyles from "../../hooks/useStyles";
// Types, Styles
import { ProductsSearchProps as Props } from "./ProductsSearch.types";
import componentStyles from "./ProductsSearch.styles";
import { useProductSearch } from "../../hooks/services/products";
import { ProductItem } from "../../components/organisms/Product/ProductItem";

export const ProductsSearch: React.FC<Props> = (props) => {
  const { styles, colors } = useStyles(componentStyles);
  const { data, fetchNextPage, hasNextPage } = useProductSearch();

  const items =
    data?.pages.flatMap((page) => {
      return page.data.products.edges;
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
