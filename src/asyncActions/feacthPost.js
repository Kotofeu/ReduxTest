import { getPost } from "../store/postsReducer"

export const featchPost = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(getPost(json)))
    }
}