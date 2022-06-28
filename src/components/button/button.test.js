import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("deberia mostrar el children del button", async () => {
    const text = "Button";

    render(<Button>{text}</Button>);

    const button = await screen.findByText(text)

    expect(button).toHaveTextContent(text)
  })

  it("deberia de ejecutar el evento onClick", async () => {
    const eventSpy = jest.fn();
    render(<Button onClick={eventSpy}>Hazme click</Button>);

    const button = await screen.findByTestId("button");

    fireEvent.click(button);

    expect(eventSpy).toHaveBeenCalledTimes(1);
  })
});