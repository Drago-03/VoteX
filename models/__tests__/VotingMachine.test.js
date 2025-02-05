const mongoose = require("mongoose");
const VotingMachine = require("../VotingMachine");

describe("VotingMachine Model", () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create & save voting machine successfully", async () => {
    const validMachine = new VotingMachine({
      machineId: "VM001",
      status: "operational",
      lastCheckedBy: new mongoose.Types.ObjectId(),
    });
    const savedMachine = await validMachine.save();

    expect(savedMachine._id).toBeDefined();
    expect(savedMachine.machineId).toBe(validMachine.machineId);
    expect(savedMachine.status).toBe(validMachine.status);
  });

  it("should fail to save with invalid status", async () => {
    const machineWithInvalidStatus = new VotingMachine({
      machineId: "VM002",
      status: "invalid-status",
    });

    let err;
    try {
      await machineWithInvalidStatus.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });
});
