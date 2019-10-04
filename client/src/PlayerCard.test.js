import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

describe("<PlayerCard />", () => {
  it("renders without crashing", () => {
    render(<PlayerCard />);
  });
});
it("displays name", () => {
  const display = render(<PlayerCard />);
  display.getByText(/name/);
});
it("displays country", () => {
  const display = render(<PlayerCard />);
  display.getByText(/country/);
});
it("displays searches", () => {
  const display = render(<PlayerCard />);
  display.getByText(/searches/);
});
