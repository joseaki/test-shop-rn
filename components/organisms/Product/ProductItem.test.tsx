import { render, screen, fireEvent } from "@testing-library/react-native";
import { ProductItem } from ".";

test("pressing the component should call the onPress", () => {
  const item = {
    cursor: "",
    node: {
      id: "1",
      title: "title test",
      productType: "",
      totalInventory: 12,
      availableForSale: false,
      featuredImage: {
        id: "",
        url: "",
      },
      priceRange: {
        maxVariantPrice: {
          amount: "12.0",
        },
        minVariantPrice: {
          amount: "12.0",
        },
      },
    },
  };
  const onPressHandler = jest.fn();
  render(<ProductItem item={item} onPress={onPressHandler} />);
  fireEvent.press(screen.getByText(item.node.title));
  expect(onPressHandler).toHaveBeenCalledTimes(1);
});
