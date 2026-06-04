export const validate = (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const message = result.error.issue[0].message;
    throw new Error("");
  }
  return result.data;
};
