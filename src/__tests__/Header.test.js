import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    test("renders the header", () => {
        render(<Header />);
        const heading = screen.getByText("Header to the page.");
        expect(heading).toBeInTheDocument();
    })
})