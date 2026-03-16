import { use } from "react"
import friend from "./friend";

export default function Friends({friendPromise}){
    const friends=use(friendPromise);

    return (
         <div className="card">
            <h2>firends {friends.length} </h2>

{
    friends.map(friend=><p>{friend}</p>)
}
         </div>
    )
}