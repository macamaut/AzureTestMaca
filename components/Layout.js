
import Header from "./Header";

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    );
}
