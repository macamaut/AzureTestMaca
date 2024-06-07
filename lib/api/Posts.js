import { getJSON, BASE_URL, putJSON, postJSON, deleteJSON } from "."
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const URL = `${BASE_URL}/posts`

const PostsAPI = {
    readAll() {
        return getJSON(`${URL}?_sort=-id`)
    },
    read(id){
        return getJSON(`${URL}/${id}`)
    },
    create(post, token){
        const data = postJSON(URL, {body:post, token})
        toast.success("Successful created post")
        return data
    },
    update(post, token){
        const data = putJSON(`${URL}/${post.id}`, {body:post, token})
        toast.success("Successful updated post")
        return data
    },
    delete(post, token){
        let data = null
        try{
            data = deleteJSON(`${URL}/${post.id}`, {token})
            toast.success("Successful deleted post")
        } catch (error) {
            toast.error("Error while deleting post")
        }
        return data
    }
}

export default PostsAPI