import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AuthenticationAPI from "../lib/api/Users"
import { useGlobalContext } from "../store"
import { toast } from "react-toastify"

const defaultModel = {
    email: '',
    password: ''
}

export default function LoginPage() {

    const { session, logout, login } = useGlobalContext()

    const [user, setUser] = useState(defaultModel)
    const [errors, setErrors] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()


    useEffect(() => {
        if (session) {
            logout()
        }
    }, [])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        user[name] = value
        setUser(user)
    }

    const validateUser = (user) => {
        let errors = defaultModel
        var isValid = true
        if (user.email.trim().length === 0) {
            errors.email = "Email can't be empty"
            isValid = false
        }
        if (user.password.trim().length === 0) {
            errors.password = "Password cant't be empty"
            isValid = false
        }
        return { errors, isValid }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        setErrors(defaultModel)

        const result = validateUser(user)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }
        try {
            const resp = await AuthenticationAPI.login(user)
            login(resp)
            router.push("/")
        } catch (e) {
            console.error(e)
            toast.error("Login Failed")
            setIsLoading(false)
        }

        setIsLoading(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input onChange={handleChange} type="email" name="email" placeholder="Email" />
                </div>

                <div>
                    <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                </div>
                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Login"}
                </button>
            </form>
        </div>
    )
}