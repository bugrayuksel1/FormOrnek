export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email alanı zorunludur";
  if (!regex.test(email)) return "Geçerli bir email adresi giriniz";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Şifre alanı zorunludur";
  if (password.length < 6) return "Şifre en az 6 karakter olmalıdır";
  return "";
};

export const validateUsername = (username) => {
  if (!username) return "Kullanıcı adı zorunludur";
  if (username.length < 3) return "Kullanıcı adı en az 3 karakter olmalıdır";
  return "";
};
