export function validateRegistration(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Nome obrigatório";
  }

  if (!data.email) {
    errors.email = "Email obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email inválido";
  }

  if (!data.password) {
    errors.password = "Senha obrigatória";
  } else if (data.password.length < 6) {
    errors.password = "Senha deve ter no mínimo 6 caracteres";
  } else if (!/[A-Z]/.test(data.password)) {
    errors.password = "A senha deve conter pelo menos uma letra maiúscula";
  } else if (!/[a-z]/.test(data.password)) {
    errors.password = "A senha deve conter pelo menos uma letra minúscula";
  } else if (!/[0-9]/.test(data.password)) {
    errors.password = "A senha deve conter pelo menos um número";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
    errors.password = "A senha deve conter pelo menos um caractere especial";
  }

  return errors;
}
