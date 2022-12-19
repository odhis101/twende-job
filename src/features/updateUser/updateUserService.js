import axios from 'axios'


const updateUser = async (userData) => {
  
  
    const response = await axios.get("http://localhost:5000/users/updateUser",userData)
  
    return response.data
  }

  const UpdateService = {

    updateUser
  
  }
  
  export default UpdateService