import axios from 'axios'

export const obtainLocations = async () => {
    try{
        let data = await axios.get('http://localhost:4000/api/alllocations')
        return data
    }
    catch (error){
        throw error
    }
}

export const uploadLocations = async (dataInput) => {
    try{
        let data = await axios.post('http://localhost:4000/api/alllocations',{dataInput})
        return data
    }
    catch (error){
        throw error
    }
}

export const deleteLocations = async (id) => {
    try{
        let data = await axios.delete(`http://localhost:4000/api/alllocations/${id}`)
        return data
    }
    catch (error){
        throw error
    }
}

export const modifyLocation = async (id, dataInput) => {
    try{
        let data = await axios.put(`http://localhost:4000/api/alllocations/${id}`, {dataInput})
        return data
    }
    catch (error){
        throw error
    }
}
