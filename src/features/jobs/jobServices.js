
import axios from 'axios'

const API_URL = 'http://localhost:5000/jobs/setJob'

const createGoal = async (goalData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.post(API_URL, goalData, config)
    console.log(response)
    return response.data
  }
  const getGoals = async () => {
  
  
    const response = await axios.get("http://localhost:5000/jobs/getjobs")
  
    return response.data
  }
  const getOneGoal = async (goalId) => {
    console.log("this is from services", goalId)
    const response = await axios.get(`http://localhost:5000/jobs/getjobs/${goalId}`)
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
  
    const response = await axios.delete(API_URL + goalId, config)
  
    return response.data
  }
  
  const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
    getOneGoal,
  }
  
  export default goalService