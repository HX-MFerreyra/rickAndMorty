import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialSate = {
    myFavorites : []
}

export default function reducer(state = initialSate, {type, payload}) {
    switch (type) {
        case ADD_FAV:
            console.log("soy el reducer", state.myFavorites)
            //state.myFavorites.push(payload);
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
            case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((element) => element.id !== payload)
            }
        default:
            return {
                ...state
            }
    }
} 