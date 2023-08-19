// playerModel.js
const { connectDB, getDB } = require("../../database");

async function upsertPlayer(player, playerData) {
  try {
    await connectDB();
    const db = getDB();
    const playersCollection = db.collection("players");

    const { _id: id, firstName, lastName } = player;
    // Assuming playerData contains the necessary fields for upsert

    const filter = {
      $or: [
        { playerId: id }, // Check by playerId
        { firstName: firstName },
        { lastName: lastName },
      ],
    };

    const update = {
      $set: {
        careerStats: playerData,
      },
    };

    const options = { upsert: true };

    await playersCollection.updateOne(filter, update, options);
    return `updated ${firstName} ${lastName}`;
  } catch (error) {
    throw error;
  }
}

module.exports = { upsertPlayer };
