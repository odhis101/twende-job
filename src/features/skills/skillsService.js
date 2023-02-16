import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const createSkill = async (skillData, token) => {
    // create a post request to the endpoint 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        }
    const response = await axios.post(`${API_URL}/skills/postSkill`, skillData, config)
    return response.data
}
const getSkill = async () => {
    const response = await axios.get(`${API_URL}/skills/getSkill`)
    return response.data
}

const skillService = {
    createSkill,
    getSkill,
}
export default skillService
