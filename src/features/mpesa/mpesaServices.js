import axios from 'axios'
const API_URL = process.env.REACT_APP_API_DARAJA
 // this is our url that calls the stk-push api
const mpesaServices = async (goalData,token) => {

    console.log("our data is here ");
    console.log(goalData)
    const response = await axios.post(`${API_URL}/daraja/stkpush`, goalData)
    console.log(response)
   
    return response.data
  }
  const goalService = {
    mpesaServices
    //mpesaService,
    //deleteGoal,
  }

  export default goalService