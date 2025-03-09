import { config } from "dotenv";

// eslint-disable-next-line no-undef
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// eslint-disable-next-line no-undef
export const {
  PORT,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  NODE_ENV,
  DB_URL,
  ARCJET_ENV,
  ARCJET_KEY,
} = process.env;
