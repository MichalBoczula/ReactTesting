import React from "react";
import { render } from "@testing-library/react";
import DateSlider from "./DateSlider";
import { dateToSol } from "../services/sols";

describe("DataSlider", () => {
  describe("redner", () => {
    it("should return an object", () => {
      const { container } = render(<DateSlider earth_date="2017-5-3" />);
      expect(container).toBeDefined();
      expect(container.outerHTML).toBe(
        `<div><div class=\"Dateslider\"><div class=\"row\"><div class=\"col-12\" style=\"text-align: center;\"><label for=\"date\">Earth Day</label><p class=\"Dateslider-date\" data-testid=\"date-label\">2017-5-3</p></div></div><div class=\"row\"><div class=\"col-3\" style=\"text-align: right;\"><small>2004-01-05</small></div><div class=\"col-6 form-group\"><input data-testid=\"date-slider\" type=\"range\" id=\"date\" class=\"form-control\" min=\"1\" max=\"5746\" value=\"4868\"></div><div class=\"col-3\"><small>2019-09-28</small></div></div></div></div>`
      );
    });

    it("should display the correct date", () => {
      const { getByTestId } = render(<DateSlider earth_date="2017-5-3" />);
      const date = getByTestId("date-label");
      expect(date).toHaveTextContent("2017-5-3");
    });

    it("it should have correct slider position", () => {
      const { getByTestId } = render(<DateSlider earth_date="2017-5-3" />);
      const date = getByTestId("date-slider");
      expect(date).toHaveValue(dateToSol("2017-5-3").toString());
    });
  });
});
dateToSol;
