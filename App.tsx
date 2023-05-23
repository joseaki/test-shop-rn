import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./hooks/useSearchBox";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000000,
    },
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaProvider>
      <SearchProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar />
          <Navigation colorScheme={colorScheme} />
        </QueryClientProvider>
      </SearchProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
