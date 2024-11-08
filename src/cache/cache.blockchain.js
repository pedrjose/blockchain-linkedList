import mongoose from "mongoose";

const connectCacheDatabase = () => {
  console.log(`Wait: Connecting to the Database..`);

  mongoose
    .connect(
      "mongodb+srv://pedrlimadev:blockchain123@cluster0.js8zj.mongodb.net/"
    )
    .then(() => console.log("\nCache Database Working!"))
    .catch((error) => console.log("\nCache Database Error!"));
};

export default connectCacheDatabase;
