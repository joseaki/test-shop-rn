import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { Collections } from ".";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "../../navigation";
import { SearchProvider } from "../../hooks/useSearchBox";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("expo-linking");
jest.mock("../../services/products.service");

test("pressing the component should call the onPress", async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30000,
        retry: false,
      },
    },
  });
  render(
    <NavigationContainer>
      <SearchProvider>
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </SearchProvider>
    </NavigationContainer>
  );
  fireEvent.changeText(screen.getByPlaceholderText("Shoes"), "Shoes");
  await waitFor(() => {
    expect(queryClient.getQueriesData(["products-search"])).toBeDefined();
  });
});
