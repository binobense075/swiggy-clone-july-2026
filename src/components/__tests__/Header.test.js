import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login Button", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
      ,
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
      ,
    </BrowserRouter>,
  );

  const cart = screen.getByText("Cart 0");

  expect(cart).toBeInTheDocument();
});

it("Should render Header Component with a cart item", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
      ,
    </BrowserRouter>,
  );

  const cart = screen.getByText(/Cart/);

  expect(cart).toBeInTheDocument();
});

it("Should change login button to logout onClick", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
      ,
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
