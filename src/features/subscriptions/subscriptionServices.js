import axios from 'axios'
const subscribers = async () => {
  
  
    const response = await axios.get("http://localhost:5000/daraja/subscriptions")
   
  
    return response.data
  }

  const goalService = {
  
    subscribers

  }
  
  export default goalService