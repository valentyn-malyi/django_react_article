import {GET_ARTICLES} from "@actions/types";

export const getArticles = () => async (dispatch, getState) => {
    const res = await fetch("/api/v1/articles", {
        headers: {
            "method": "GET",
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    if (data.error)
        dispatch({
            type: GET_ARTICLES,
            payload: {
                articles: [],
                isLoading: false,
                error: data
            }
        })
    else
        dispatch({
            type: GET_ARTICLES,
            payload: {
                articles: data,
                isLoading: false,
                error: null
            }
        })
}