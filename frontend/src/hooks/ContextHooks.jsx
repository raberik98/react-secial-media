import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

export function useAuthContext() {
    return useContext(authContext)
}