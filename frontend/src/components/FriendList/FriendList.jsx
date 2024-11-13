import './FriendList.css'

export default function FriendList({ friends = [], clickHandler, searchHandler }) {
    return <>
        <div className='mb-3'>
            <div class="mb-3">
                <label htmlFor="friends-search-bar" className="form-label">Search by anything</label>
                <input onChange={(e) => { searchHandler(e.target.value) }} type="email" className="form-control" id="friends-search-bar" aria-describedby="emailHelp" />
                <div className="form-text">Name, gender, height, heair color</div>
            </div>
        </div>
        <div className='overflow-y-scroll w-100' style={{ "height": "100dvh" }}>
            {
                friends.map(friend => <div onClick={() => clickHandler(friend)} style={{ "cursor": "pointer" }} className='bg-dark rounded-1 mb-2 p-3 container align-items-center justify-content-between w-100' key={friend.id}>
                    <div className="row w-100">
                        <div className='col-4'>
                            <img src={friend.img} className='rounded' style={{ "width": "80px", "height": "120px" }} alt="..."></img>
                        </div>
                        <div className='col-4'>
                            <div className='d-flex flex-column align-items-center justify-content-center gap-1'>
                                <p>{friend.gender == true ? "Man" : "Woman"}</p>
                                <p>{friend.height}</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <h5>{friend.name}</h5>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </>
}