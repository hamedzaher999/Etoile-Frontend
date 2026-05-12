function validateEmail(email) {
  if (!email) return "Email is required";

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  return regex.test(email) ? "" : "Please enter a valid email address";
}

export { validateEmail };
