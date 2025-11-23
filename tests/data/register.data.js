import { generateUsername } from "../utils/generator.helper.js";

export const registerDataSet = {
  validUser: {
    firstName: "admin",
    lastName: "admin",
    username: generateUsername(),
    password: "Camelcase01!"
  },
  invalidUser: {
    firstName: "",
    lastName: "",
    username: "nope",
    password: "123"
  }
};
