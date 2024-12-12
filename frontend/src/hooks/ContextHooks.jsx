import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import { toastContext } from "../contexts/ToastContext";

export function useAuthContext() {
    return useContext(authContext)
}

export function useToastContext() {
    return useContext(toastContext)
}