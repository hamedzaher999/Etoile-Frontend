const formInitialState = {
  value: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    streetAddress: "",
    paymentMethod: "",
  },
  error: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      const newErrors = { ...state.error };
      delete newErrors[action.field];
      return {
        ...state,
        value: {
          ...state.values,
          [action.field]: action.value,
        },
        error: newErrors,
      };
    case "ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          [action.field]: action.error,
        },
      };
    case "DELETE": {
      const newErrors = { ...state.error };
      delete newErrors[action.field];
      return {
        ...state,
        error: newErrors,
      };
    }
    default:
      return state;
  }
}

export { formReducer, formInitialState };
