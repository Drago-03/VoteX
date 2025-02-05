const Voter = require("../models/Voter");

class VoterVerificationService {
  static async verifyVoterList(pollingBoothId) {
    try {
      const voters = await Voter.find({ pollingBoothId });

      for (const voter of voters) {
        // Simulate AI verification process
        const isValid = await this.runAIVerification(voter);

        voter.verificationStatus = isValid ? "verified" : "rejected";
        voter.lastVerified = new Date();
        await voter.save();
      }

      return { success: true, message: "Verification completed" };
    } catch (error) {
      console.error("Error verifying voter list:", error);
      return { success: false, error: error.message };
    }
  }

  static async runAIVerification(voter) {
    // Implement actual AI verification logic here
    // This is a placeholder that returns true 90% of the time
    return Math.random() > 0.1;
  }
}

module.exports = VoterVerificationService;
