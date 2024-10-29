export default function FriendList({ friends, clickHandler }) {
    return <>
        {
            friends.map(friend => <div key={friend.id}>
                <h2>{friend.name}</h2>
                <button onClick={() => clickHandler(friend)} className="btn btn-primary">Click me!</button>
            </div>)
        }
    </>
}