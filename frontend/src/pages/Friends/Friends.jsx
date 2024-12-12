import { useState } from "react"
import FriendList from "../../components/FriendList"
import MediaFeed from "../../components/MediaFeed"

import { useFriends } from "../../hooks/FriendHooks"


export default function Friends() {
    const [friends, getFriends, mediaFeed, setMediaFeed] = useFriends()
    const [searchValue, setSearchValue] = useState("")

    function filterFriends() {
        if (searchValue == "") {
            return friends
        }

        return friends.filter((friend) => (
            friend.name.includes(searchValue) || 
            friend.height == searchValue || 
            friend.hairColor == searchValue ||
            (searchValue == "woman" && friend.gender == false) ||
            (searchValue == "man" && friend.gender == true) 
        ))
    }

    return <>
        <div className="container p-3" style={{"maxWidth": "100%"}}>
            <div className="row gap-2 justify-content-center">
                <div className="col col-3 bg-secondary p-2 rounded-3 border-2">
                    <FriendList friends={filterFriends()} searchHandler={setSearchValue}/>
                </div>
                <div className="col col-8 bg-secondary p-1 overflow-y-scroll rounded-3 border-2" style={{"height": "100dvh"}}>
                    <MediaFeed feedArray={mediaFeed}/>
                </div>
            </div>
        </div>
    </>
}