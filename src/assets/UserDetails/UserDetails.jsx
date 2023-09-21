import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {id, name,  username, email,address,phone, website} = userDetails
    const {street, suite, city, zipcode} = address;
    const goBack = useNavigate()
   const handleGoBack =()=>{
      goBack(-1)
   }
 
    return (
        <div className="flex-grow">  
             <div className="flex flex-col justify-center items-center pt-20 ">
               <div className="bg-gray-950 text-white p-10 rounded space-y-3">
               <h3>ID : {id}</h3>
                <h3>Name : {name}</h3>
                <h3>User Name : {username}</h3>
                <h3>Email: {email}</h3>
                <h3> Street : {street}</h3>
                <h3> Suite : {suite}</h3>
                <h3> City :{city}</h3>
                <h3> zipcode : {zipcode}</h3>
                <h3> Mo : {phone}</h3>
                <h3> Website : {website}</h3>
                <div className="flex justify-end">
                    <button onClick={handleGoBack}
                     className="bg-blue-600 btn text-white border-none">Go Back</button>
                </div>
               </div>
             </div>
        </div>
    );
};

export default UserDetails;