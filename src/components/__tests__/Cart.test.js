import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_ITEM_DATA from "../mocks/resItemMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_ITEM_DATA) }),
);

it("Should load restaurant menu component", async () => {
  await act(async () => {
    render(<RestaurantMenu />);
  });

  const itemName = screen.getByRole("heading", { name: "Behrouz Biryani" });

  expect(itemName).toBeInTheDocument();
});

it("Should open the restaurant category accordian", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>,
    );
  });

  const categoryName = screen.getByText("Hyderabadi Biryani (Spicy) (14)");

  expect(categoryName).toBeInTheDocument();

  fireEvent.click(categoryName);

  const items = screen.getAllByTestId("foodItem");

  expect(items.length).toBe(14);
});

it("Should add items to the basket", async () => {
  await act(async () => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    );
  });

  const categoryName = screen.getByText("Hyderabadi Biryani (Spicy) (14)");

  expect(categoryName).toBeInTheDocument();

  fireEvent.click(categoryName);

  const addButton = screen.getAllByRole("button", { name: "Add+" });

  expect(addButton.length).toBe(14);

  const beforeUpdatingCart = screen.getByText("Cart 0");

  expect(beforeUpdatingCart).toBeInTheDocument();

  fireEvent.click(addButton[0]);

  const afterAddingItemCart = screen.getByText("Cart 1");

  expect(afterAddingItemCart).toBeInTheDocument();
});

it("Should update the cart while adding the items", async () => {
  await act(async () => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    );
  });

  const categoryName = screen.getByText("Hyderabadi Biryani (Spicy) (14)");

  fireEvent.click(categoryName);

  const addButton = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addButton[1]);

  const afterAddingItemCart = screen.getByText("Cart 2");

  fireEvent.click(afterAddingItemCart);

  expect(screen.getByText("Cart")).toBeInTheDocument();

  const itemsBeforeClear = screen.getAllByTestId("foodItem");

  expect(itemsBeforeClear.length).toBe(16);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);

  const itemsAftereClear = screen.getAllByTestId("foodItem");

  expect(itemsAftereClear.length).toBe(14);
});
