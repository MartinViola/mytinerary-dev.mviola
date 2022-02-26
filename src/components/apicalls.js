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
    console.log(dataInput)
    try{
        let data = await axios.post('http://localhost:4000/api/alllocations',{dataInput})
        return data
    }
    catch (error){
        throw error
    }
}

export const deleteLocations = async (id) => {
    console.log(id)
    try{
        let data = await axios.delete(`http://localhost:4000/api/alllocations/${id}`)
        return data
    }
    catch (error){
        throw error
    }
}
