import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("toggles profile and keeps the mount timer until unmount", () => {
  jest.useFakeTimers("modern");
  try {
    const { unmount } = render(<App />);
    expect(screen.queryByRole("article", { name: "Person profile" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Show profile" }));
    expect(screen.getByRole("heading", { name: "Marvin" })).toBeTruthy();
    expect(screen.getByRole("img").getAttribute("src")).toBe("/profile.svg");
    act(() => jest.advanceTimersByTime(3000));
    expect(screen.getByText(/Time since mount:/).textContent).toBe("Time since mount: 3 seconds");
    fireEvent.click(screen.getByRole("button", { name: "Hide profile" }));
    expect(screen.queryByRole("article", { name: "Person profile" })).toBeNull();
    act(() => jest.advanceTimersByTime(2000));
    expect(screen.getByText(/Time since mount:/).textContent).toBe("Time since mount: 5 seconds");
    expect(jest.getTimerCount()).toBe(1);
    unmount();
    expect(jest.getTimerCount()).toBe(0);
  } finally {
    jest.useRealTimers();
  }
});
