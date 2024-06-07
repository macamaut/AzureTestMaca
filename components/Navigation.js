import Link from "next/link"
import { useRouter } from 'next/router'
import { useGlobalContext } from "@/store"

import styles from "./Navigation.module.css"

export default function Navigation() {

    const { session, logout } = useGlobalContext()
    const router = useRouter()

    return (
        <div className={styles.navigation}>
            <div>
                <ul>
                    <li>
                        <Link href="/posts/create">Create</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    {session && <li><Link href="/profile">Profile</Link></li>}
                    <li>
                        {session ? <Link href="/login" onClick={(e) => logout()} className="nav-link">Logout</Link> : <Link href="/login" className={"nav-link " + (router.pathname == "/login" && "active")}>Login</Link>}
                    </li>
                </ul>
            </div>
        </div>
    )
}