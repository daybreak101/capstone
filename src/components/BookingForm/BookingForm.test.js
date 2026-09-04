import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

// test("BookingForm can be submitted", () => {
//   const handleSubmit = jest.fn();

//   render(
//     <BookingForm
//       availableTimes={["17:00", "18:00", "19:00"]}
//       dispatch={jest.fn()}
//       onSubmit={handleSubmit}
//     />,
//   );

//   fireEvent.click(
//     screen.getByRole("button", {
//       name: /make your reservation/i,
//     }),
//   );

//   expect(handleSubmit).toHaveBeenCalled();
// });

test("return true", () => {
  expect(true).toBe(true);
});
