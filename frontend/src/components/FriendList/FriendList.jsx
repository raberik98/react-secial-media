export default function FriendList({ friends }) {
    return <>
        {
            friends.map(friend => <h2>{friend.name}</h2>)
        }
    </>
}