
const INITIAL_STATE = {
    appName: "React JS"
};

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "APP_CHANGE_NAME":
            console.log(action);
            return {
                ...state,
                appName: action.payload
            }
            break;

        default:
            break;
    }
    return state;
}

export const action = reducer.action;
export default reducer;