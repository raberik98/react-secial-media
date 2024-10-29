import FriendList from "../../components/FriendList"
import FriendEditor from "../../components/FriendEditor"

import { useFriends } from "../../hooks/FriendHooks"
import { PatchFriend } from "../../services/friend.service"
import { useState } from "react"

export default function Admin() {
    const [ friends, setFriends ] = useFriends()
    const [ selectedFriend, setSelectedFriend ] = useState(null)

    function handleClickFriend(friend) {
        setSelectedFriend(friend)
    }

    async function handleEditFormSubmit(e) {
        e.preventDefault()
        PatchFriend(selectedFriend).then((data) => {
            let updateThis = friends.find(nextFriend => nextFriend.id ==  selectedFriend.id)
            Object.keys(updateThis).forEach(nextKey => {
                updateThis[nextKey] = data[nextKey]
            })
            setFriends([...friends])

            alert("The update has been successful.")
        }).catch(err => {
            alert(err)
        })
        
    }
    
    return <>
        <div className="container p-3">
            <div className="row gap-1">
                <div className="col col-2 bg-secondary p-1">
                    <FriendList clickHandler={handleClickFriend} friends={friends} />
                </div>
                <div className="col col-9 bg-secondary p-1">
                   <FriendEditor handleSubmit={handleEditFormSubmit} friend={selectedFriend} setFriend={setSelectedFriend} />
                </div>
            </div>
        </div>
    </>
}