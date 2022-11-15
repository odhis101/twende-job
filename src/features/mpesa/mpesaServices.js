import axios from 'axios'
const API_URL ="http://localhost:5000/daraja/stkpush" // this is our url that calls the stk-push api
const mpesaServices = async (goalData,token) => {

    console.log("our data is here ");
    console.log(goalData)
    const response = await axios.post(API_URL, goalData)
    console.log(response)
   
    return response.data
  }
  const goalService = {
    mpesaServices
    //mpesaService,
    //deleteGoal,
  }

  export default goalService