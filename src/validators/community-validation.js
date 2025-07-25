export function validateCreateCommunity(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Nome obrigatório";
  }

  return errors;
}
