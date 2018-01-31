import { fromJS } from 'immutable'

const initialState= fromJS({
    currentPage : 0
})

export default (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_PAGE":
            return state.set("currentPage", action.payload.currentPage );
        default:
            return state;
    }
}