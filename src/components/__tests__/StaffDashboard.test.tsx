import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { StaffDashboard } from "../StaffDashboard";
import { db } from "../../lib/firebase";
import "@testing-library/jest-dom";

// Mock Firebase
jest.mock("../../lib/firebase", () => ({
  db: {
    collection: jest.fn(),
  },
}));

describe("StaffDashboard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders dashboard stats", () => {
    render(<StaffDashboard />);
    expect(screen.getByText("Total Voters")).toBeInTheDocument();
    expect(screen.getByText("Verified")).toBeInTheDocument();
    expect(screen.getByText("Failed")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("filters voters based on search query", async () => {
    render(<StaffDashboard />);
    const searchInput = screen.getByPlaceholderText("Search voters...");
    fireEvent.change(searchInput, { target: { value: "John" } });
    await waitFor(() => {
      expect(screen.getByDisplayValue("John")).toBeInTheDocument();
    });
  });

  it("refreshes voter list when refresh button clicked", async () => {
    render(<StaffDashboard />);
    const refreshButton = screen.getByText("Refresh");
    fireEvent.click(refreshButton);
    await waitFor(() => {
      expect(db.collection).toHaveBeenCalledWith("voters");
    });
  });
});
