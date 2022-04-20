import FirstApp from "../FirstApp";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Test FisrstApp", () => {
  test("should show Hello!", () => {
    const hi = "Hello!";
    const { getByText } = render(<FirstApp hello={hi} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(hi)).toBeInTheDocument();
  });

  test("should show How are you?", () => {
    const { getByText } = render(<FirstApp hello={"hi"} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("How are you?")).toBeInTheDocument();
  });
});
