export function validateCreateItem(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Nome obrigatório";
  }

  if (!data.category) {
    errors.name = "Categoria obrigatória";
  }

  return errors;
}
