const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/khushi2", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection was successful");
  } catch (error) {
    console.error("Sorry, we failed to connect:", error);
  }
};

connectToMongo();
