function validate(password) {
  if(/^\w{6,}$/.test(password) && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)){
    return true;
  }
  return false;
}
