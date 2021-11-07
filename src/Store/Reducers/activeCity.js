export default function reducerCity(state, action) {
    
    switch(action.type) {
        case "NumberActiveCity": return {...state, NumberActiveCity: action.NumberActiveCity };
        default: return state;
    }
}