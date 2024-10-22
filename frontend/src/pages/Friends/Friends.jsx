import FriendList from "../../components/FriendList"
import MediaFeed from "../../components/MediaFeed"

import { useFriends } from "../../hooks/FriendHooks"


export default function Friends() {
    const [friends, getFriends] = useFriends(1)

    return <>
        <div className="container p-3">
            <div className="row gap-1">
                <div className="col col-2 bg-secondary p-1">
                    <FriendList friends={friends}/>
                </div>
                <div className="col col-9 bg-secondary p-1">
                    <MediaFeed/>
                </div>
            </div>
        </div>
    </>
}