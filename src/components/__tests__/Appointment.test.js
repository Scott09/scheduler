import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment/Appointment";

afterEach(cleanup);


describe("Appointment", () => {

  // Testing that the Appointment component renders to the DOM
  test("renders without crashing", () => {
    render(<Appointment />);
  });
});

