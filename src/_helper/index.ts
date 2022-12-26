export const isLogin = () => {
  return localStorage.getItem("isAuth") === "T";
};

export const logout = () => {
  localStorage.removeItem("isAuth");
};
