import { useRouter } from 'next/router'
import { useGlobalContext } from '@/store';
import PostForm from "@/components/PostForm";
import { useEffect, useState } from 'react';
import PostsAPI from '@/lib/api/Posts';

export default function EditPage() {
    
    const [post, setPost] = useState(null)

    const { session, loading } = useGlobalContext()
    const router = useRouter()

    const urlID = router.query.id

    useEffect(() => {
        if (!session && !loading && router.isReady) {
            router.push("/login")
        }
    }, [session, router, loading])

    useEffect(() => {
        let isMounted = true

        if (!router.isReady) return

        const loadPost = async () => {
            const post = await PostsAPI.read(urlID)
            if(isMounted){
                setPost(post)
            }
        }
        loadPost()

        return () => isMounted = false
    }, [router])

    return (
        <>
            <h1>Edit Post</h1>
            <PostForm postToEdit={post} />
        </>
    );
}