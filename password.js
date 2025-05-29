function generatePassword() {
  const specials = "!@#$%^&*()_+{}[]|:;<>,.?/~`";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";

  let allChars = specials + uppercase + lowercase + digits;

  function hasSpecial(pw) {
    return [...pw].some(c => specials.includes(c));
  }

  function hasUpper(pw) {
    return [...pw].some(c => uppercase.includes(c));
  }

  function noConsecutiveDigits(pw) {
    for (let i = 0; i < pw.length - 1; i++) {
      if (digits.includes(pw[i]) && digits.includes(pw[i + 1])) {
        const diff = Math.abs(pw.charCodeAt(i) - pw.charCodeAt(i + 1));
        if (diff === 1) return false;
      }
    }
    return true;
  }

  let password = "";
  const maxTries = 1000;
  let tries = 0;

  do {
    password = "";
    for (let i = 0; i < 6; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    tries++;
  } while (
    (!hasSpecial(password) || !hasUpper(password) || !noConsecutiveDigits(password)) &&
    tries < maxTries
  );

  return tries < maxTries ? password : "Não foi possível gerar senha.";
}