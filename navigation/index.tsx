import * as React from "react";
import { ColorSchemeName } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "../components/molecules/Header";
import { RootStackParamList } from "./stackNavigator.types";
import LinkingConfiguration from "./LinkingConfiguration";
import { CustomDarkTheme, CustomLightTheme } from "../config/theme";
import { Collections } from "../screens/collections";
import { Products } from "../screens/products";
import { ProductsSearch } from "../screens/productsSearch/ProductsSearch";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? CustomDarkTheme : CustomLightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "Back",
        headerShadowVisible: false,
      }}
      initialRouteName="Collections"
    >
      <Stack.Screen
        name="Collections"
        component={Collections}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="ProductsSearch"
        component={ProductsSearch}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}
