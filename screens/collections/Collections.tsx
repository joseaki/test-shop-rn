import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Hooks
import useStyles from "../../hooks/useStyles";
// Types, Styles
import { CollectionsProps as Props, Form } from "./Collections.types";
import componentStyles from "./Collections.styles";
import { useCollection } from "../../hooks/services/collection";
import { CollectionItem } from "../../components/organisms/Collection";
import { CollectionEdge } from "../../types/collection.types";

export const Collections: React.FC<Props> = (props) => {
  const { navigation } = props;
  const { styles, colors } = useStyles(componentStyles);
  const { data, fetchNextPage, hasNextPage } = useCollection();
  const items =
    data?.pages.flatMap((page) => page.data.collections.edges) ?? [];

  const getNextCollections = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const handleOnPress = (item: CollectionEdge) => {
    navigation.navigate("Products", { collectionId: item.node.id });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 16 }}
        data={items}
        numColumns={2}
        keyExtractor={(item) => item.node.id}
        onEndReached={getNextCollections}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => (
          <CollectionItem item={item} onPress={handleOnPress} />
        )}
      />
    </SafeAreaView>
  );
};
