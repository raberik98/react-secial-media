import { createContext, useState, useRef } from "react";
import Toast from "../components/Toast/Toast";

export const toastContext = createContext(null)

export function ToastContextProvider({ children }) {
    const [toasts, setToasts] = useState([])

    function GenerateNextId() {
        if (toasts.length == 0) {
            return 1
        }

        return toasts[toasts.length-1].id + 1
    }

    function AddToast(text, type) {
        setToasts(
            [...toasts, { text, type,  id: GenerateNextId()}]
        )
    }

    function RemoveToast(id) {
        setToasts(toasts.filter(toast => toast.id != id))
    }

    return <toastContext.Provider value={{AddToast, RemoveToast}}>
        {children}
        <div id="toast-container" className="d-flex gap-1 flex-column justify-content-end pb-5">
            {toasts.map(toast => 
                <Toast key={toast.id} toast={toast}/>
            )}
        </div>
    </toastContext.Provider>
}