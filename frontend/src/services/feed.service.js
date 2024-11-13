import { app } from "../firebase/firebase.js";

const USERS_BASE_URL = `${app["_options"]["databaseURL"]}/feed`

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


export async function GetMediaFeed() {
    return [
        {
            title: "Tech Giants Unveil New AI Tools",
            postedBy: "Alice Johnson",
            content: "Today, several major tech companies announced new AI tools aimed at enhancing user experience and productivity. This includes features like AI-driven content recommendations, automated customer service, and more.",
            links: [
                "https://technews.com/ai-tools-announcement",
                "https://innovationhub.com/ai-tools-explained"
            ],
            date: new Date("2024-11-10T09:30:00")
        },
        {
            title: "Recipe for a Perfect Autumn Soup",
            postedBy: "Chef Lina's Kitchen",
            content: "Warm up this autumn with our hearty pumpkin and butternut squash soup. It’s simple, delicious, and perfect for cozy nights. Check out our recipe and enjoy a comforting bowl of soup tonight!",
            links: [
                "https://chef-lina.com/autumn-soup-recipe"
            ],
            date: new Date("2024-11-08T17:00:00")
        },
        {
            title: "5 Tips for Staying Productive While Working from Home",
            postedBy: "Productivity Pro",
            content: "Working from home can be challenging. Here are five tips to help you stay focused, organized, and productive throughout the day.",
            links: [
                "https://productivitypro.com/tips-for-working-from-home"
            ],
            date: new Date("2024-11-07T14:15:00")
        },
        {
            title: "Exploring the Wild: Best Hiking Trails in 2024",
            postedBy: "Outdoor Explorer",
            content: "Looking to reconnect with nature? Check out our list of the best hiking trails to explore in 2024. From lush forests to stunning mountain views, there’s something for everyone.",
            links: [
                "https://outdoorexplorer.com/best-hiking-trails-2024"
            ],
            date: new Date("2024-11-06T11:45:00")
        },
        {
            title: "New Study Links Diet to Mental Health",
            postedBy: "Wellness Weekly",
            content: "A recent study has found that a balanced diet rich in fruits, vegetables, and whole grains may have a positive impact on mental well-being. Read more to find out how your diet could be affecting your mood.",
            links: [
                "https://wellnessweekly.com/diet-and-mental-health",
                "https://healthnews.com/research-on-diet-and-mood"
            ],
            date: new Date("2024-11-05T10:00:00")
        },
        {
            title: "Concerts You Can’t Miss This Season",
            postedBy: "Live Nation",
            content: "Live music is back! Discover the top concerts happening near you this season, featuring your favorite artists from pop to rock to jazz.",
            links: [
                "https://livenation.com/upcoming-concerts",
                "https://concertguide.com/top-events-2024"
            ],
            date: new Date("2024-11-04T20:00:00")
        }
    ]
    
}




