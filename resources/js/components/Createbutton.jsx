import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const Createbutton = () => {
  return (
    <div className="flex mt-3 justify-end ">
  <a href="/appointments/create" className="inline-flex items-center p-2  rounded-full text-blue-600 text-4xl ">
    <FontAwesomeIcon icon={faPlus} beatFade />
   
  </a>
  
    
</div>
  )
}

export default Createbutton