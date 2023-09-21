import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';
const User = ({user}) => {
    const navigate = useNavigate();
    const {id, username, name, email} = user

    const handleNavigate = () =>{  
        navigate(`/users/${id}`)
    }
    return (
        <div className='border-2 border-blue-400 p-4  rounded'>
            <h3 className='font-bold'> ID : {id}</h3>
            <h3 className='font-medium'> User Name : {username}</h3>
            <h3 className='text-gray-500'> Name : {name}</h3>
            <h3 className='text-gray-500'> Email : {email}</h3>
            <div className='flex justify-end my-3'>
                <button onClick={handleNavigate} className='btn bg-red-500 text-white'>Details</button>
            </div>
        </div>
    );
};

User.propTypes ={
    user : PropTypes.object
}
export default User;