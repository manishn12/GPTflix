export const Validator = (email, password, fullName = "") => {
  let checkEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  let checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (fullName !== "") {
    let checkFullName =
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
        fullName
      );
    if (!checkFullName) {
      return "Name should be valid";
    }
  }
  if (!checkEmail) {
    return "Email ID is not valid";
  }
  if (!checkPassword) {
    return "Password is not valid";
  }

  return null;
};
