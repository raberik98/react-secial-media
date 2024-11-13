import { useState, useEffect } from "react";
import { GetFriends } from "../services/friend.service";
import { GetMediaFeed } from "../services/feed.service";

export function useFriends() {
    const [friends, setFriends] = useState([])
    const [mediaFeed, setMediaFeed] = useState([])

    useEffect(() => {
        GetFriends()
            .then(data => setFriends(data))
            .catch(err => {
                console.log(err);
                alert("Cannot get friends!");
            })
        GetMediaFeed().then(data => setMediaFeed(data)).catch(err => {
            console.log(err);
            alert("Cannot get media feed!");
        })
    }, [])

    return [friends, setFriends, mediaFeed, setMediaFeed]
}