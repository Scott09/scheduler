import React from "react";

import { getByText, prettyDOM } from "@testing-library/react";

// import axios from 'axios';
// axios.defaults.baseURL = "http://localhost:3001";

import { render, cleanup, waitForElement , fireEvent} from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => {


  test("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {

    const { container , getAllByTestId , getByAltText, getByPlaceholderText, debug, queryByText } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];

    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

    fireEvent.click(getByText(appointment, "Save"));

    debug();

    expect(getByText(appointment, "Saving")).toBeInTheDocument();

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );

    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
  });
});