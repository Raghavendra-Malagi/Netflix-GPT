export const checkValidaData = (name, email, password) => {
  // console.log(name, email, password);

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (name === "") return "Name is required";
  if (!isValidEmail) return "Email is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};
