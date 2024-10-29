import { useState, useEffect } from "react";
import { GetFriends } from "../services/friend.service";

export function useFriends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        GetFriends()
            .then(data => setFriends(data))
            .catch(err => {
                console.log(err); 
                alert("Cannot get friends!");
            })
    }, [])

    return [friends, setFriends]
}