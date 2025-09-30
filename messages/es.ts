import AuthMessagesEs from "../features/sub-features/auth/messages/es.json";
import CoreMessagesEs from "../features/sub-features/core/messages/es.json";

export default {
  ...AuthMessagesEs,
  ...CoreMessagesEs,
  ExampleText: {
    label: "Hola Mundo",
    greeting: "¡Hola, bienvenido a Centus!",
    farewell: "¡Adiós, hasta pronto!",
  },
};
