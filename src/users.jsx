import { use } from "react"

export default function Users({fetchUsers}){

    const users=use(fetchUsers);
    console.log(users);
    return(

        <div className="card fontBold">
            <h2 className="fontBold" >Users {users.length}</h2>
        </div>

    )
}