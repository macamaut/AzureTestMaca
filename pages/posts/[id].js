import Link from "next/link"
import PostsAPI from "@/lib/api/Posts"
import { useRouter } from 'next/router'
import { useGlobalContext } from "@/store"

import styles from "./detailPost.module.css"

export default function DetailPost({ post }) {

    const router = useRouter()
    const { session } = useGlobalContext()

    const handleDelete = async () => {
        await PostsAPI.delete(post, session.accessToken)
        router.push(`/`)
    }

    return !post ? null : (
        <div className={styles['detail-container-styling']}>
            <div>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <p><i>Erstellt am {post.createdAt}</i></p>
            </div>

            <div className={styles['detail-buttons-container']}>
                <Link className="button" href={`/`}>Back</Link>
                {session && <Link className="button" href={`/posts/edit/${post.id}`}>Edit</Link>}
                {session && <Link className="button" onClick={handleDelete} href={`/`}>Delete</Link>}
            </div>

        </div>
    )
}



export async function getStaticProps(context) {
    const id = context.params.id
    const post = await PostsAPI.read(id)
    return {
        props: { post }, revalidate: 10
    }
}

export async function getStaticPaths() {
    const posts = await PostsAPI.readAll()
    const paths = posts.map(posts => (
        {
            params: { id: posts.id.toString() }
        })
    )
    return { paths, fallback: true }
} 