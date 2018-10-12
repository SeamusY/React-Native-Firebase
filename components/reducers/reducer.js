import { setuser } from '../store/actions/actionTypes'

const initialState = {
    user:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case setuser:
            return {
                user: state.user
            }
        default:
            return state
    }
};

export default reducer