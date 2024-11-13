import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { AuthContextProvider } from "../../contexts/AuthContext"

export default function Layout() {
    return <>
        <AuthContextProvider>
            <Navbar />
            <main className="w-100">
                <Outlet />
            </main>
        </AuthContextProvider>
    </>
}