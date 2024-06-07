import { BASE_URL, postJSON } from "."
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const URL = `${BASE_URL}`

const AuthenticationAPI = {
    login(user){
        const data = postJSON(`${URL}/login`, {body: user}) 
        return data
    }
}

export default AuthenticationAPI