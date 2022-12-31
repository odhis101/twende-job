import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

const getSubscribers = async (goalData) => {
  const response = await axios.post(`${API_URL}/daraja/subscriptions`, goalData)
  console.log(goalData)
  console.log(response.data)
  return response.data
}

const goalService = {
  getSubscribers
}

export default goalService