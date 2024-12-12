export default function FriendEditor({ friend, setFriend, handleSubmit }) {
    return <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name of the friend</label>
            <input 
                value={friend != null ? friend.name : ""} 
                onChange={(e) => setFriend(prevState => ({...prevState, name: e.target.value}))}
                type="text" className="form-control" id="nameInput" aria-describedby="name" />
            <div id="name" className="form-text">Type here the name of the friend</div>
        </div>
        <div className="mb-3">
            <label htmlFor="hairInput" className="form-label">Hair color</label>
            <input type="text"
            value={friend != null ? friend.hairColor : ""} 
            onChange={(e) => setFriend(prevState => ({...prevState, hairColor: e.target.value}))}
            className="form-control" id="hairInput" />
        </div>
        <div className="mb-3">
            <label htmlFor="heightInput" className="form-label">Height in cm</label>
            <input type="number"
            value={friend != null ? friend.height : 0} 
            onChange={(e) => setFriend(prevState => ({...prevState, height: e.target.value}))}
            className="form-control" id="heightInput" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox"
            checked={friend != null ? friend.gender : false} 
            onChange={(e) => setFriend(prevState => ({...prevState, gender: e.target.value}))} className="form-check-input" id="gender" />
            <label className="form-check-label" htmlFor="gender">True for male, false for female</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}