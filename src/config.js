
import { config } from "dotenv";
require("dotenv").config();

console.log(process.env.MONGODB_URI);
console.log(process.env.PORT);

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb//localhost/test";

