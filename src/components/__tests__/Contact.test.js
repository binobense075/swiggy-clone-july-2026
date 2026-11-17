import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // afterAll(() => {
  //   console.log("after All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("should load contact us component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact component", () => {
    render(<Contact />);

    const inputname = screen.getByPlaceholderText("name");

    expect(inputname).toBeInTheDocument();
  });

  it("should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");

    expect(inputBox.length).toBe(2);
  });
});
