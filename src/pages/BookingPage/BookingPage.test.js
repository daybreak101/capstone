import { initializeTimes, updateTimes } from "./BookingPage";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

//copy over API because tests can't access window.fetchAPI
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

window.fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
window.submitAPI = function(formData) {
    return true;
};

//make "today" be a fixed date
jest.useFakeTimers();
jest.setSystemTime(new Date("2026-09-02"));

test("initializeTimes should not be empty", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("initializeTimes returns the expected available times for 'today'", () => {
  const times = initializeTimes();
  expect(times).toEqual(['17:00', '17:30', '18:00', '20:00', '21:00', '23:30']);
});

test("updateTimes should not be empty", () => {
  const state = [];
  const times = updateTimes(state, {
    type: "UPDATE_TIMES",
    date: "2026-11-04",
  });
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns available times for a given date", () => {
  const state = [];
  const times = updateTimes(state, {
    type: "UPDATE_TIMES",
    date: "2026-11-04",
  });
  expect(times).toEqual(['17:00', '17:30', '19:30', '21:00', '21:30']);
});
