import PostForm from "@/components/PostForm";
import { useGlobalContext } from "@/store";
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CreatePage() {
    const { session, loading } = useGlobalContext()
    const router = useRouter()

    useEffect(() => {
        if (!session && !loading && router.isReady) {
            router.push("/login")
        }
    }, [session, router, loading])
    return (
        <>
            <h1>Create Post</h1>
            <PostForm />
        </>
    );
}