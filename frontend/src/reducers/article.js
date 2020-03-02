import {GET_ARTICLES} from "@actions/types"

const initialState = {
    articles: [],
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}