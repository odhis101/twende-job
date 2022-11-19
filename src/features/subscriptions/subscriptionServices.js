import axios from 'axios'

const getSubscribers = async (goalData) => {
  const response = await axios.post("http://localhost:5000/daraja/subscriptions", goalData)
  console.log(goalData)
  console.log(response.data)
  return response.data
}

const goalService = {
  getSubscribers
}

export default goalService