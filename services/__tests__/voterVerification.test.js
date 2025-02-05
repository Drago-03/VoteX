const VoterVerificationService = require("../voterVerification");
const Voter = require("../../models/Voter");

// Mock Voter model
jest.mock("../../models/Voter");

describe("VoterVerificationService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("verifyVoterList", () => {
    it("should verify all voters in a polling booth", async () => {
      const mockVoters = [{ save: jest.fn() }, { save: jest.fn() }];

      Voter.find.mockResolvedValue(mockVoters);

      const result = await VoterVerificationService.verifyVoterList("booth123");

      expect(result.success).toBe(true);
      expect(Voter.find).toHaveBeenCalledWith({ pollingBoothId: "booth123" });
      expect(mockVoters[0].save).toHaveBeenCalled();
      expect(mockVoters[1].save).toHaveBeenCalled();
    });

    it("should handle errors during verification", async () => {
      Voter.find.mockRejectedValue(new Error("Database error"));

      const result = await VoterVerificationService.verifyVoterList("booth123");

      expect(result.success).toBe(false);
      expect(result.error).toBe("Database error");
    });
  });

  describe("runAIVerification", () => {
    it("should return a boolean value", async () => {
      const result = await VoterVerificationService.runAIVerification({});
      expect(typeof result).toBe("boolean");
    });
  });
});
