import { app } from "../firebase/firebase.js";

const USERS_BASE_URL = `${app["_options"]["databaseURL"]}/users`

function FormatDataObjectToArray(dataObject) {
    return Object.keys(dataObject).map(nextDataId => ({
        id: nextDataId,
        ...dataObject[nextDataId]
    }))
}

function FromConvertedObjectToFirebaseObject(obj) {
    let returnObj = {}

    Object.keys(obj).forEach(nextKey => {
        if (nextKey != "id") {
            returnObj[nextKey] = obj[nextKey]   
        }
    })

    return returnObj
}

export async function GetFriends() {
    const data = await fetch(`${USERS_BASE_URL}.json`).then(resp => resp.json())
    return FormatDataObjectToArray(data)
}

export async function PatchFriend(updatedFriend) {
    const data =  await fetch(`${USERS_BASE_URL}/${updatedFriend.id}.json`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(FromConvertedObjectToFirebaseObject(updatedFriend))
    }).then(resp => resp.json())
    return data
}

