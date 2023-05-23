import { render, screen, fireEvent } from "@testing-library/react-native";
import { CollectionItem } from ".";

test("pressing the component should call the onPress", () => {
  const item = {
    cursor: "",
    node: {
      id: "1",
      handle: "",
      title: "title test",
      description: "desc",
      image: {
        id: "",
        url: "",
      },
    },
  };
  const onPressHandler = jest.fn();
  render(<CollectionItem item={item} onPress={onPressHandler} />);
  fireEvent.press(screen.getByText(item.node.title));
  expect(onPressHandler).toHaveBeenCalledTimes(1);
});
