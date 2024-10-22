import { useState, useEffect } from "react";
import { GetFriends } from "../services/friend.service";

export function useFriends(id) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        GetFriends(id)
            .then(data => setFriends(data))
            .catch(err => {
                console.log(err); 
                alert("Cannot get friends!");
            })
    }, [])

    return [friends, setFriends]
}