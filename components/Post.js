import Link from 'next/link'
import styles from './Post.module.css'

export default function Post({props}){
    return(
        <div className={styles.post}>
            <p className={styles.postTitle}>{props.title}</p>
            <p>{props.text}</p>
            <Link className={styles.postLink} href={`posts/${props.id}`}>More Details</Link>
        </div>
    )
}