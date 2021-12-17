import { fireEvent, render, screen } from "@testing-library/react";

import Greetings from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Greetings name="My Name" />);

    expect(screen.getByText(/Hello My Name/)).toBeInTheDocument();
  });
});

describe("when rendered with `onSendWaves` prop", () => {
  it("should render the sending waves button", () => {
    render(<Greetings name="My Name" onSendWaves={() => {}} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("when the button is clicked", () => {
  it("should call the `onSendWaves` callback", () => {
    const onSendWaveMock = jest.fn();
    render(<Greetings name="My Name" onSendWaves={onSendWaveMock} />);

    fireEvent.click(screen.getByRole("button"));
    expect(onSendWaveMock).toHaveBeenCalledWith("Waves sent to My Name");
  });
});
