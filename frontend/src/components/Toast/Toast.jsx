import { useToastContext } from "../../hooks/ContextHooks.jsx"
import { useEffect } from "react"
import "./Toast.css"


export default function Toast({toast}) {
    const { RemoveToast } = useToastContext()

    useEffect(() => {
        let timeout = setTimeout(() => RemoveToast(toast.id), 1500)

        return () => { clearTimeout(timeout) }
    })


    return <div className="toast align-items-center toast-item show bg-dark" data-bs-theme="dark">
    <div className="d-flex">
      <div className="toast-body">
        {toast.text}
      </div>
      <button type="button" className="btn-close me-2 m-auto" onClick={() => RemoveToast(toast.id)}/>
    </div>
  </div>
}