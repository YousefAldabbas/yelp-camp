import axios from 'axios';


const URL = "/api/campgrounds/"

const getCamps = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

const createCamp = async (data,token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.post(URL, data, config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}


const getCamp = async (id) => {
    try {
        const response = await axios.get(URL + id);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

const updateCamp = async (id, data) => {
    try {
        const response = await axios.put(URL + id, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

const deleteCamp = async (id) => {
    try {
        const response = await axios.delete(URL + id);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

const campService = {
    getCamps,
    createCamp,
    getCamp,
    updateCamp,
    deleteCamp
}
export default campService;