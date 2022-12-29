import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <Header />
            <body>{children}</body>
        </>
    )
}