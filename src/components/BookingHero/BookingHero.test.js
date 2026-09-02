import { render, screen } from "@testing-library/react";
import BookingHero from "./BookingHero";

test('Renders the BookingPage heading', () => {
    render(<BookingHero />);
    const headingElement = screen.getByText("Reservation");
    expect(headingElement).toBeInTheDocument();
})