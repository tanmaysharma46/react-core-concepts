export default function Friend({friend}){
    console.log(friend);
    const {email,phone,name,address}=friend;

    return(
        <div className="card">
            <h4>Name : {name}</h4>
            <h2>Email: {email}</h2>
            <h2>phone number : {phone}</h2>
            {/* <h2>Address: {address}</h2> */}
        </div>
    )
}