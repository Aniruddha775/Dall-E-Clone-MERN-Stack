import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); //useful for search functionality

  mongoose
    .connect(url)
    .then(() => {
      console.log("Mongodb connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
