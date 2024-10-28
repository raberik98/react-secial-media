export default function FriendList({ friends }) {
    return <>
        {
            friends.map(friend => <h2 key={friend.name}>{friend.name}</h2>)
        }
    </>
}