import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const createSkill = async (skillData, token) => {
    // create a post request to the endpoint 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        }
    const response = await axios.post(`http://localhost:5000/skills/postSkill`, skillData, config)
    return response.data
}
const getSkill = async () => {
    const response = await axios.get(`http://localhost:5000/skills/getSkill`)
    return response.data
}

const skillService = {
    createSkill,
    getSkill,
}
export default skillService
