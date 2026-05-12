import { object } from "framer-motion/client";

const keys = [
  "firstName",
  "lastName",
  "email",
  "phoneNumber",
  "password",
  "confirmPassword",
  "country",
  "city",
  "streetAddress",
  "paymentMethod",
];
function handelEmptyFields(state, dispatch) {
  for (let i = 0; i < keys.length; i++) {
    if (!state.value[keys[i]]) {
      dispatch({
        type: "ERROR",
        field: keys[i],
        error: "this field is required",
      });
    }
  }
}
export { handelEmptyFields };
