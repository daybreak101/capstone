import { initializeTimes, updateTimes } from "./BookingPage";

test("initializeTimes returns the expected available times", () => {
  expect(initializeTimes()).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns the current state", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  expect(updateTimes(state, { type: "UPDATE_TIMES", date: "2026-09-02" }))
    .toEqual(state);
});