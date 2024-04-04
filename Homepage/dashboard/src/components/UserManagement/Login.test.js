import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Login Component Tests", () => {
  const setup = () => render(<Login />);

  test("renders initial state with empty fields", () => {
    setup();
    const emailInput = screen.getByPlaceholderText("Email Id");
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  test("validates fields on form submission attempt", async () => {
    setup();
    userEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
  });

  test("shows email format error on invalid email", async () => {
    setup();
    userEvent.type(screen.getByPlaceholderText("Email Id"), "invalidemail");
    userEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(
      await screen.findByText("Please Enter a valid Email Id")
    ).toBeInTheDocument();
  });

  test("validates password length on submission attempt", async () => {
    setup();
    userEvent.type(screen.getByPlaceholderText("Password"), "123");
    userEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(
      await screen.findByText("Password must be at least 6 characters")
    ).toBeInTheDocument();
  });

  test("calls onSubmit with email and password on valid submission", async () => {
    setup();
    const email = "test@example.com";
    const password = "password123";
    userEvent.type(screen.getByPlaceholderText("Email Id"), email);
    userEvent.type(screen.getByPlaceholderText("Password"), password);
    userEvent.click(screen.getByRole("button", { name: /login/i }));
  });
});
