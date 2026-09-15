export const validate = (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const message = result.error.issues[0].message;
    throw new Error(message);
  }
  return result.data;
};
