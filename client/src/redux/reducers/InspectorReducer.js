const initialState = {profile :''};
const InspectorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_INSPECTOR": {
            state.profile = action.payload;
            console.log(state.profile)


        }
    }
    return state;
};
export default InspectorReducer;