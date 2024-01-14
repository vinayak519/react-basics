import { createReducer, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    appName: "React IMDB",
    allMovies: [],
    upComingMovies: [],
    latestMovies: [],
    events: [],
};

// function reducer(state = INITIAL_STATE, action) {

//     switch (action.type) {
//         case "APP_CHANGE_NAME":
//             console.log(action);
//             return {
//                 ...state,
//                 appName: action.payload
//             }
//             break;

//         default:
//             break;
//     }
//     return state;
// }

const reducer = createSlice({
    name: "movies",
    initialState: INITIAL_STATE,
    reducers: {
        getAllMovies: (state, action) => {
            state.allMovies = [];
            state.allMovies = action.payload;
        },
        getAllEvents: (state, action) => {
            state.events = [];
            state.events = action.payload;
        }
    }
});

export const action = reducer.actions;
export default reducer.reducer;