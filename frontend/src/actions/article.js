import {GET_ARTICLES} from "@actions/types";


export const getArticles = () => (dispatch, getState) => {
    fetch("/api/v1/articles", {
        headers: {
            "method": "GET",
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: GET_ARTICLES,
                payload: {
                    articles: res,
                    isLoading: false
                }
            })
        })
        .catch(err => console.log(err))
};