import axios from 'axios'

const API_URL = 'http://localhost:5000/users/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post('http://localhost:5000/users/users/', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post("http://localhost:5000/users/login", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  else{
    console.log('something went wrong')
  }

  return response.data
}
const updateUser = async (userData) => {
  
  
  const response = await axios.get("http://localhost:5000/users/updateUser",userData)

  return response.data
}
// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  updateUser,
  logout,
  login,
}

export default authService