const initialState = {
    itineraries:[],
    auxItineraries:[],
    cityItineraries:[]
}

const itinerariesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'fetchItineraries':
            return{
                ...state,
                itineraries: action.payload,
                auxItineraries: action.payload,
            }
            case 'fetchOneItinerary':
                return{
                    ...state,
                    cityItineraries: action.payload,
                    auxItineraries: action.payload,
                }
        default:
            return state
    }
}
export default itinerariesReducer