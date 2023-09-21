import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData()
    // const [users, setUsers]  = useState([])
     
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data))
    // },[])
    return (
        <div className="flex-grow">
           <div className="grid grid-cols-4 gap-4 mt-10"> 
           {
            users.map(user=><User key={user.id} user={user}></User>)
           }
           </div>
        </div>
    );
};

export default Users;