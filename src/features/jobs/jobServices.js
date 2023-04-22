
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
//console.log("here is the env",process.env.REACT_APP_API_URL)

const createGoal = async (goalData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.post(`${API_URL}/jobs/setJob`, goalData, config)
    //console.log(response)
    return response.data
  }
  const getGoals = async () => {
  
    //console.log(`${API_URL}/jobs/getjobs`)
    const response = await axios.get(`${API_URL}/jobs/getjobs`)
    //console.log('this is response',response.data)
  
    return response.data.reverse()
  }
  const getOneGoal = async (goalId) => {
    //console.log("this is from services", goalId)
    const response = await axios.get(`${API_URL}/jobs/getjobs/${goalId}`)
    console.log(response)
    return response.data
  }
  
  // Delete user goal
  const deleteGoal = async (goalId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  }
  /*
    // get goal from a file 
    const getManyGoals = async () => {
      
  
    const response = await axios.delete(API_URL + goalId, config)
  
    return response.data
  }
  */
  
  const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
    getOneGoal,
  }
  
  export default goalService