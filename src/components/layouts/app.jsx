import Header from "./Header";

export default function App({children}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}   