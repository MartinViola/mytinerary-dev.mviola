const initialState = {
    cities:[],
    aux:[],
    filterCities:[],
    oneCity: []
}

const citiesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'fetch':
            return{
                ...state,
                cities: action.payload,
                aux: action.payload,
                filterCities: action.payload
            }
        case 'delete':
            return{
                ...state,
                cities: action.payload
            }
        case 'upload':
            let cities = [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities,
                aux: [...cities]
            }
        case 'filter':
            const filtered = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))
            return{
                ...state,
                filterCities: filtered
            }
        case 'fetchOneLocation':
            return{
                ...state,
                oneCity: action.payload
            }
        default:
            return state
    }
}
export default citiesReducer