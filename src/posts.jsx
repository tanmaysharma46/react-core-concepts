import { use } from "react"
import Post from "./post";

export default function Posts ({postPromise}){
    const posts=use(postPromise);
    console.log(posts);
    return (
        <div className="card">
            <h2> All Posts are here :{posts.length}</h2>
            {
                posts.map(post=><Post key={post} post={post}></Post>)
            }
        </div>
    )
}