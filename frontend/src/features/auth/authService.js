import axios from "axios";

const URL = "http://localhost:3000/api/users/";

const login = async (data) => {

  const response = await axios.post(URL + "login", data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data)); //it will include token
  }
  return response.data;
};

const register = async (data) => {
  try {
    const response = await axios.post(URL, data);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data)); //it will include token
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const logout = async () => {
  localStorage.removeItem("user");
  return true;
};
const authService = {
  login,
  register,
  logout,
};

export default authService;
