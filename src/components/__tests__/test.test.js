import React from "react";

import { render, cleanup } from "@testing-library/react";


test("uses the mock implementation", () => {
  const fn = jest.fn((a, b) => 42);
  fn(1, 2);
  expect(fn).toHaveReturnedWith(42);
  });