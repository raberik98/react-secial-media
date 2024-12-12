import { useAuthContext } from "../../hooks/ContextHooks"
import { useNavigate } from "react-router-dom"

export default function Registration() {
    const { registrationWIthEmailAndPassword } = useAuthContext()
    const navigate = useNavigate()
    
    function handleSubmit(e) {
        e.preventDefault()
        registrationWIthEmailAndPassword(
            e.target.email.value,
            e.target.password.value
        ).then(() => navigate("/friends")).catch(err => alert(err))
    }

    return <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}