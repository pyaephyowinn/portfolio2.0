export const setTheme = (theme) => {
  localStorage.setItem("darkMode", theme);
};

export const getTheme = () => {
  return localStorage.getItem("darkMode");
};
