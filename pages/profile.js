import { useGlobalContext } from "../store"

export default function ProfilePage() {
    const { session } = useGlobalContext()
    return (
        <div style={{ overflow: "hidden" }}>
            <h1>Your Profile</h1>
            <pre>{JSON.stringify(session, null, 4)}</pre>
        </div>
    )
}
