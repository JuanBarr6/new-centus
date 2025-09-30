import AuthMessagesEn from "../features/sub-features/auth/messages/en.json";
import CoreMessagesEn from "../features/sub-features/core/messages/en.json";

export default {
  ...AuthMessagesEn,
  ...CoreMessagesEn,
  ExampleText: {
    label: "Hello world",
    greeting: "Hello, welcome to Centus!",
    farewell: "Goodbye, see you soon!",
  },
};
