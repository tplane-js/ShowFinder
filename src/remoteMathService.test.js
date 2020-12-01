import { useCallback } from "react";
import { remoteMathService } from "./remoteMathService";

it("callback is not called right away", () => {
  jest.useFakeTimers();
  const callback = jest.fn();
  remoteMathService(callback);
  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();
});


it("callback is called after 2 seconds", () => {
  jest.useFakeTimers();
  const callback = jest.fn();
  remoteMathService(callback);
  jest.advanceTimersByTime(2000);
  // Now our callback should have been called!
  expect(callback).toBeCalled();
});


it("callback is called once with value 3", () => {
  jest.useFakeTimers();
  const callback = jest.fn();
  remoteMathService(callback);
  jest.advanceTimersByTime(2000);
  // Now our callback should have been called!
  expect(callback).toHaveBeenCalledTimes(1);
  // and value passed to the callback is available
  expect(callback).toHaveBeenLastCalledWith(undefined, 3);
});
