import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import RES_CARD_MOCK from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={RES_CARD_MOCK} />);

  const name = screen.getByText("Sweet Truth - Cake and Desserts");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard Component with Promoted Label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={RES_CARD_MOCK} />);

  const promotedLabel = screen.getByText("Promoted");

  expect(promotedLabel).toBeInTheDocument();
});
