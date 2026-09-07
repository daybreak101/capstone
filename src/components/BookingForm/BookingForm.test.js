import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  availableTimes: ["17:00", "18:00", "19:00"],
  dispatch: jest.fn(),
  onSubmit: jest.fn(),
};

// step 1
test("HTML validation attributes are applied", () => {
  render(<BookingForm {...defaultProps} />);

  const date = screen.getByLabelText(/choose date/i);
  const firstName = screen.getByRole("textbox", {
    name: /first name/i,
  });
  const lastName = screen.getByRole("textbox", {
    name: /last name/i,
  });
  const phoneNumber = screen.getByRole("textbox", {
    name: /phone number/i,
  });

  expect(date).toHaveAttribute("type", "date");
  expect(firstName).toHaveAttribute("required");
  expect(lastName).toHaveAttribute("required");
  expect(phoneNumber).toHaveAttribute("required");
});

//step 2
test("valid form can be submitted", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /book time/i,
    }),
  );

  userEvent.click(screen.getByText("17:00"));

  userEvent.type(
    screen.getByRole("textbox", {
      name: /first name/i,
    }),
    "John",
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /last name/i,
    }),
    "Smith",
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /phone number/i,
    }),
    "602-555-1234",
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(onSubmit).toHaveBeenCalled();
});

test("shows errors when required fields are empty", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(
    screen.getByText("Timeslot is required"),
  ).toBeInTheDocument();

  expect(
    screen.getByText("First name is required"),
  ).toBeInTheDocument();

  expect(
    screen.getByText("Last name is required"),
  ).toBeInTheDocument();

  expect(
    screen.getByText("Phone number is required"),
  ).toBeInTheDocument();

  expect(onSubmit).not.toHaveBeenCalled();
});

test("accepts a valid first name", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /book time/i,
    }),
  );

  userEvent.click(screen.getByText("17:00"));

  userEvent.type(
    screen.getByRole("textbox", {
      name: /first name/i,
    }),
    "John",
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /last name/i,
    }),
    "Smith",
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /phone number/i,
    }),
    "602-555-1234",
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(
    screen.queryByText("Enter a valid first name"),
  ).not.toBeInTheDocument();

  expect(onSubmit).toHaveBeenCalled();
});

test("rejects invalid first name", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /first name/i,
    }),
    "John123",
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(
    screen.getByText("Enter a valid first name"),
  ).toBeInTheDocument();

  expect(onSubmit).not.toHaveBeenCalled();
});

test("accepts a valid last name", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /book time/i,
    }),
  );

  userEvent.click(screen.getByText("17:00"));

  userEvent.type(
    screen.getByRole("textbox", {
      name: /first name/i,
    }),
    "John",
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /last name/i,
    }),
    "Smith",
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /phone number/i,
    }),
    "602-555-1234",
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(
    screen.queryByText("Enter a valid last name"),
  ).not.toBeInTheDocument();

  expect(onSubmit).toHaveBeenCalled();
});

test("rejects invalid last name", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /last name/i,
    }),
    "Smith123",
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(
    screen.getByText("Enter a valid last name"),
  ).toBeInTheDocument();

  expect(onSubmit).not.toHaveBeenCalled();
});

test("accepts a valid phone number", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /book time/i,
    }),
  );

  userEvent.click(screen.getByText("17:00"));

  userEvent.type(
    screen.getByRole("textbox", {
      name: /first name/i,
    }),
    "John",
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /last name/i,
    }),
    "Smith",
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /phone number/i,
    }),
    "602-555-1234",
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(
    screen.queryByText("Enter a valid phone number"),
  ).not.toBeInTheDocument();

  expect(onSubmit).toHaveBeenCalled();
});

test("rejects invalid phone number", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.type(
    screen.getByRole("textbox", {
      name: /phone number/i,
    }),
    "abc123",
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(
    screen.getByText("Enter a valid phone number"),
  ).toBeInTheDocument();

  expect(onSubmit).not.toHaveBeenCalled();
});

test("requires a timeslot", () => {
  const onSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  userEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    }),
  );

  expect(
    screen.getByText("Timeslot is required"),
  ).toBeInTheDocument();

  expect(onSubmit).not.toHaveBeenCalled();
});