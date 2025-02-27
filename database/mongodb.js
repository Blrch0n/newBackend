import mongoose from "mongoose";
import { DB_URL, NODE_ENV } from "../config/env.js";

if (!DB_URL) {
  throw new Error(
    "Please define the DB_URL environment variable inside .env.<development/production>.local"
  );
}

const connectToDataBase = async () => {
  try {
    await mongoose.connect(DB_URL);

    console.log(`Connected to the database in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("Error connecting to the database", error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectToDataBase;
