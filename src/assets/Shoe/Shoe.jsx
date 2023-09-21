
import PropTypes from 'prop-types'; 
const Shoe = ({shoe}) => {
    const {image,title,description,btnText} = shoe

    return (
        <div className='border p-4 rounded'>
         <div className='h-1/2 w-full'>
         <img className='h-full w-full object-cover rounded-md' src={image} alt="" />
         </div>
           <div>
              <h3 className='text-center py-4 text-xl font-bold'>{title}</h3>
              <p className='text-center py-3 text-base font-normal'>{description}</p>
            <div className='flex justify-center py-4'> 
            <button className='btn bg-green-600 text-white'>{btnText}</button>
            </div>
           </div>
        </div>
    )
};

Shoe.propTypes = {
    shoe: PropTypes.object
}
export default Shoe;