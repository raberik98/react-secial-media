export default function SingleFeed({ feed }) {
    return <div className="card text-center mb-3" data-bs-theme="dark">
        <div className="card-header">
            {feed.postedBy}
        </div>
        <div className="card-body">
            <h5 className="card-title">{feed.title}</h5>
            <p className="card-text">{feed.content}</p>
            <ul>
                {
                    feed.links.map(link => <li><a href={link} target="blank">{link}</a></li>)
                }
            </ul>
        </div>
        <div className="card-footer text-body-secondary">
            {`${feed.date}`}
        </div>
    </div>
}