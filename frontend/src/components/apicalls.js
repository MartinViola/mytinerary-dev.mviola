import axios from 'axios'

export const obtainLocations = async () => {
    try{
        let data = await axios.get('https://mytinerary-viola.herokuapp.com/api/alllocations')
        return data
    }
    catch (error){
        throw error
    }
}

export const uploadLocations = async (dataInput) => {
    try{
        let data = await axios.post('https://mytinerary-viola.herokuapp.com/api/alllocations',{dataInput})
        return data
    }
    catch (error){
        throw error
    }
}

export const deleteLocations = async (id) => {
    try{
        let data = await axios.delete(`https://mytinerary-viola.herokuapp.com/api/alllocations/${id}`)
        return data
    }
    catch (error){
        throw error
    }
}

export const modifyLocation = async (id, dataInput) => {
    try{
        let data = await axios.put(`https://mytinerary-viola.herokuapp.com/api/alllocations/${id}`, {dataInput})
        return data
    }
    catch (error){
        throw error
    }
}
