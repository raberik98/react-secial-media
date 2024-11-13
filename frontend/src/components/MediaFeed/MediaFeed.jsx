import SingleFeed from "../SingleFeed"

export default function MediaFeed({ feedArray=[] }) {
    return <div className="w-100 p-3">
        {
            feedArray.map(feed => <SingleFeed key={feed.title} feed={feed}/>)
        }
    </div>
}