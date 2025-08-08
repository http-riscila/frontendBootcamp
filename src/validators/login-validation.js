export function validateLogin(data) {
  const errors = {};

  if (!data.email) {
    errors.email = "Email obrigatório";
  }

  if (!data.password) {
    errors.password = "Senha obrigatória";
  }

  return errors;
}
