import Navigation from "./Navigation";
import Image from "next/image";
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles['header']}>
            <div className={styles['header_image']}>
                <Image
                    src="/logo_campus_news.png"
                    alt="logo picture"
                    width={64}
                    height={60}
                    />
            </div>
            <div>
                <h1 className={styles.header_title}>CAMPUS NEWS</h1>
            </div>
            <Navigation />
        </header>
    );
}
