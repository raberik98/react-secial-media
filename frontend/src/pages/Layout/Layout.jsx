import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { AuthContextProvider } from "../../contexts/AuthContext"
import { ToastContextProvider } from "../../contexts/ToastContext"

export default function Layout() {
    return <>
        <AuthContextProvider>
            <ToastContextProvider>
                <Navbar />
                <main className="w-100">
                    <Outlet />
                </main>
            </ToastContextProvider>
        </AuthContextProvider>
    </>
}